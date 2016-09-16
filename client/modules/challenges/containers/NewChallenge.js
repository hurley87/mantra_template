import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import NewChallenge from '../components/NewChallenge.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId()
  if(Meteor.subscribe('studentId', parentId).ready()) {
  	const students = Collections.Students.find({"parentId": parentId}).fetch()[0].students;
    if(Meteor.subscribe('student.usernames', students).ready()) {
      const students = Meteor.users.find({}).fetch()
      onData(null, {students});
    }	
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
