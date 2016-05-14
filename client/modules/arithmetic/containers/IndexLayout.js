import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import IndexLayout from '../components/IndexLayout.jsx';

export const composer = ({context, type}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const toggle = LocalState.get('TOGGLE');
  onData(null, {toggle})
};

export const depsMapper = (context, actions) => ({
  showMenu: actions.header.showMenu,
  completeLevels: actions.index_layout.completeLevels,
  lockedLevels: actions.index_layout.lockedLevels,
  currentLevel: actions.index_layout.currentLevel,
  levelLocked: actions.index_layout.levelLocked,
  levelFinished: actions.index_layout.levelFinished,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(IndexLayout);
