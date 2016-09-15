import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Students from '../components/Students.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId();

  if(Meteor.subscribe('studentId', parentId).ready()) {
  	const studentIds = Collections.Students.find({"parentId": parentId}).fetch()[0].students;
  	onData(null, {studentIds});
  }
};

export const depsMapper = (context, actions) => ({
  edit: actions.challenges.edit,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Students);