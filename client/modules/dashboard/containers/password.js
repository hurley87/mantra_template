import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Password from '../components/password.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const view = LocalState.get('SETTINGSVIEW');
  const toggle = LocalState.get('TOGGLE');  
  const user = Meteor.userId();

  if(user && Meteor.subscribe('profiles.single', user).ready()){
    const profile = Collections.Profiles.findOne({user});
    onData(null, {view, toggle, profile})
  }

};

export const depsMapper = (context, actions) => ({
  showView: actions.profile.showView,
  getView: actions.profile.getView,
  updatePassword: actions.profile.updatePassword,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Password);
