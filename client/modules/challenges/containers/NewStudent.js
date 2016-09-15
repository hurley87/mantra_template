import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import NewStudent from '../components/NewStudent.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId()
  if(Meteor.subscribe('studentId', parentId).ready()) {
  	const studentId = Collections.Students.find({"parentId": parentId}).fetch()[0].students[0];
  	onData(null, {studentId});
  }
};

export const depsMapper = (context, actions) => ({
  createStudent: actions.challenges.createStudent,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewStudent);
