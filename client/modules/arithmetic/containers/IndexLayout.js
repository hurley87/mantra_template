import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import IndexLayout from '../components/IndexLayout.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const toggle = LocalState.get('TOGGLE');
  onData(null, {toggle});
};

export const depsMapper = (context, actions) => ({
  showMenu: actions.header.showMenu,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(IndexLayout);
