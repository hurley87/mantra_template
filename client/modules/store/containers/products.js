import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Products from '../components/products.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const view = LocalState.get('STORE_VIEW');
  onData(null, {view});
};

export const depsMapper = (context, actions) => ({
	getView: actions.store.getView,
  	context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Products);
