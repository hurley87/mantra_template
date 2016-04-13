import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Settings from '../components/settings.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const view = LocalState.get('SETTINGSVIEW');
  const toggle = LocalState.get('TOGGLE');  
  
  const user = Meteor.userId();

  if(user && Meteor.subscribe('profiles.single', user).ready()){
    const profile = Collections.Profiles.findOne({user});
    console.log(profile)
    onData(null, {view, toggle, profile})
  }

};

export const depsMapper = (context, actions) => ({
  showView: actions.settings.showView,
  getView: actions.settings.getView,
  createProfile: actions.settings.createProfile,
  updateProfile: actions.settings.updateProfile,
  updatePassword: actions.settings.updatePassword,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Settings);
