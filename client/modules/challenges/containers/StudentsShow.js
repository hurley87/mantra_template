import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import StudentsShow from '../components/StudentsShow.jsx';
import { _ } from 'lodash';

export const composer = ({context, studentId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId();
	if(Meteor.subscribe('student', studentId).ready()) {
		const student = Meteor.users.find({ _id: studentId }).fetch()[0]
  		onData(null, {student});
	}
};

export const depsMapper = (context, actions) => ({
  edit: actions.challenges.edit,
  setStudent: actions.challenges.setStudent,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StudentsShow);