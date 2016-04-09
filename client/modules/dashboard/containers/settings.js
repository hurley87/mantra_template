import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Settings from '../components/settings.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const view = LocalState.get('SETTINGSVIEW');
  onData(null, {view});
};

export const depsMapper = (context, actions) => ({
  showView: actions.settings.showView,
  getView: actions.settings.getView,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Settings);
