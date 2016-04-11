import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DashboardLayout from '../components/DashboardLayout.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  onData(null, {LocalState});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DashboardLayout);