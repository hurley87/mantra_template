import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import StoreFront from '../components/storefront.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const toggle = LocalState.get('TOGGLE'); 
  const view = LocalState.get('STORE_VIEW');
  onData(null, {toggle, view})
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StoreFront);
