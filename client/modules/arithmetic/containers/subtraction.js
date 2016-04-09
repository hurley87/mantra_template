import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Subtraction from '../components/subtraction.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const view = LocalState.get("SUBVIEW");
  onData(null, {view});
};

export const depsMapper = (context, actions) => ({
  setView: actions.subtraction.setView,
  getView: actions.subtraction.getView,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Subtraction);
