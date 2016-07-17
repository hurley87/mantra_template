import Tracker from '../components/Tracker.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState, Meteor, Collections, FlowRouter} = context();
  const userId = Meteor.userId();
  const user = Meteor.users.findOne(userId);
  const email = user.emails[0].address;
  if(Meteor.subscribe('student.list', email).ready()) {
    const profile = Collections.Students.find({"email": email}).fetch()[0];
    const studentId = profile.students[0];
    if(Meteor.subscribe('student', studentId).ready() && Meteor.subscribe('answers', studentId)) {
	    const student = Meteor.users.findOne(studentId);
	    const answers = Collections.Answers.find({}).fetch()
	    onData(null, {LocalState, Meteor, FlowRouter, profile, student, answers});
    }
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
 clearErrors: actions.logins.clearErrors,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(Tracker);