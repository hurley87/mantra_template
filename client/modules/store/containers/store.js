import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import StoreFront from '../components/storefront.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const view = LocalState.get('STORE_VIEW');
  onData(null, {view});
};

export const depsMapper = (context, actions) => ({
	getView: actions.store.getView,
	textbookView: actions.store.textbookView,
	formView: actions.store.formView,
	getCard: actions.store.getCard,
  	context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StoreFront);
