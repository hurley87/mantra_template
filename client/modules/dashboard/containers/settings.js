import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Settings from '../components/settings.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const view = LocalState.get('SETTINGSVIEW');
  const toggle = LocalState.get('TOGGLE');

  if(Meteor.subscribe('profiles.list').ready()){
  const profiles = Collections.Profiles.find().fetch();
  onData(null, {view, toggle, profiles});
  }
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
