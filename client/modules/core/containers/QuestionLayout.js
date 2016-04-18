import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import QuestionLayout from '../components/QuestionLayout.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor} = context();
  const user_id = Meteor.userId();
  onData(null, {LocalState, user_id});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuestionLayout);