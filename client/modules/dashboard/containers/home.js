import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Header from '../components/home.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const toggle = LocalState.get('TOGGLE');
  console.log(toggle)
  onData(null, {toggle});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
