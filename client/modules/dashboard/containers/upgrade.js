import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Header from '../components/upgrade.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const toggle = LocalState.get('TOGGLE');
  onData(null, {toggle});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
