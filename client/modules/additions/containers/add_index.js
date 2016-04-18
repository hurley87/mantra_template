import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import AddIndex from '../components/add_index.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('additions.index').ready()){
    const additions = Collections.Additions.find({});
    onData(null, {additions})
  } else {
    onData(null, {});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddIndex);
