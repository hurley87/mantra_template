import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Question from '../components/Question.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor} = context();
  onData(null, {LocalState});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Question);