import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import VideoLesson from '../components/VideoLesson.jsx';

export const composer = ({context, type}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const toggle = LocalState.get('TOGGLE');
  onData(null, {toggle})
};

export const depsMapper = (context, actions) => ({
  showMenu: actions.header.showMenu,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(VideoLesson);
