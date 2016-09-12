import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import NewChallenge from '../components/NewChallenge.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId()
  if(parentId && Meteor.subscribe('studentId', parentId).ready()) {
  	const studentId = Collections.Students.find({"parentId": parentId}).fetch()[0].students[0];
  	onData(null, {studentId});
  }
};

export const depsMapper = (context, actions) => ({
  create: actions.challenges.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewChallenge);
