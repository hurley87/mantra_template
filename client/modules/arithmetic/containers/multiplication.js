import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Multiplication from '../components/multiplication.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const view = LocalState.get("MULTIVIEW");
  const toggle = LocalState.get('TOGGLE');
  onData(null, {view, toggle});
};

export const depsMapper = (context, actions) => ({
  setView: actions.multiplication.setView,
  getView: actions.multiplication.getView,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Multiplication);