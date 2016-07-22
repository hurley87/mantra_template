import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import NewChallenge from '../components/NewChallenge.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  create: actions.challenges.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewChallenge);
