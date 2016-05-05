import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import IndexLayout from '../components/IndexLayout.jsx';

export const composer = ({context, type}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const toggle = LocalState.get('TOGGLE');
  const userId = Meteor.userId();
  if(userId && Meteor.subscribe('profiles.single', userId).ready()){
    const profile = Collections.Profiles.find({"user": userId}).fetch()[0];
    onData(null, {toggle, profile})
  }
};

export const depsMapper = (context, actions) => ({
  showMenu: actions.header.showMenu,
  levelStats: actions.index_layout.levelStats,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(IndexLayout);
