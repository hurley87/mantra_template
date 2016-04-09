import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Addition from '../components/addition.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const view = LocalState.get('ADDVIEW');
  onData(null, {view});
};

export const depsMapper = (context, actions) => ({
  setView: actions.addition.setView,
  getView: actions.addition.getView,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Addition);
