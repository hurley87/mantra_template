import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import StudentName from '../components/StudentName.jsx';
import { _ } from 'lodash';

export const composer = ({context, studentId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  var parentId = Meteor.userId();
	if(Meteor.subscribe('student', studentId).ready()) {
		const username = Meteor.users.find({ _id: studentId }).fetch()[0].username
  		onData(null, {username});
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
)(StudentName);

