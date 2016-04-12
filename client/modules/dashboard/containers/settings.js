import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Settings from '../components/settings.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const view = LocalState.get('SETTINGSVIEW');
  const toggle = LocalState.get('TOGGLE');
  const user = Meteor.userId();
  
  const profile = Meteor.subscribe('profiles.single', user)
    
  onData(null, {view, toggle, profile})

};

export const depsMapper = (context, actions) => ({
  showView: actions.settings.showView,
  getView: actions.settings.getView,
  createProfile: actions.settings.createProfile,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Settings);
