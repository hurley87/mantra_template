import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Challenges from '../components/Challenges.jsx';
import { _ } from 'lodash';

export const composer = ({context, studentId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId();
  let username = LocalState.get('STUDENT_USERNAME');
  if(Meteor.subscribe('studentId', parentId).ready()) {
  	const studentIds = Collections.Students.find({"parentId": parentId}).fetch()[0].students;
    if(username == undefined) {
      LocalState.set('STUDENT_USERNAME', studentId);
      username = LocalState.get('STUDENT_USERNAME');
    }
  	onData(null, {studentIds, username, studentId});
  }
};

export const depsMapper = (context, actions) => ({
  edit: actions.challenges.edit,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Challenges);