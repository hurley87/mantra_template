import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Students from '../components/Students.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId();
  let username = LocalState.get('STUDENT_USERNAME');
  if(Meteor.subscribe('studentId', parentId).ready()) {
  	const studentIds = Collections.Students.find({"parentId": parentId}).fetch()[0].students;
    if(username == undefined) {
      const studentId = studentIds[0];
      const student = Meteor.users.find({ _id: studentId }).fetch()[0];
      if(student) {
        username = student.username
        onData(null, {studentIds, username});
      }
      
    }
  	onData(null, {studentIds, username});
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