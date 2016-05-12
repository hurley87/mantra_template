import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Settings from '../components/settings.jsx';
import Loading from '../components/Loading.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const view = LocalState.get('SETTINGSVIEW');
  const toggle = LocalState.get('TOGGLE');  
  
  const user = Meteor.userId();

  if(user && Meteor.subscribe('profiles.single', user).ready()){
    const profile = Collections.Profiles.findOne({user});
    const points = profile.countPoints + profile.addPoints + profile.subPoints + profile.multiPoints + profile.divPoints;
    let ratio = (profile.wrong / profile.right).toFixed(2);
    if(isNaN(ratio)) {
      ratio = 0;
    }
    onData(null, {view, toggle, profile, points, ratio})
  }

};

export const depsMapper = (context, actions) => ({
  showView: actions.settings.showView,
  getView: actions.settings.getView,
  createProfile: actions.settings.createProfile,
  updateProfile: actions.settings.updateProfile,
  updatePassword: actions.settings.updatePassword,
  getToken: actions.settings.getToken,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loading),
  useDeps(depsMapper)
)(Settings);
