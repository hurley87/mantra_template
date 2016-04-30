import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import IndexLayout from '../components/IndexLayout.jsx';

export const composer = ({context, type}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const toggle = LocalState.get('TOGGLE');
  const userId = Meteor.userId();
  if(userId && Meteor.subscribe('profiles.single', userId).ready()){
    const profile = Collections.Profiles.find({"user": userId}).fetch()[0];
    let points = 0;
    switch(type) {
      case 'addition':
        points = profile.addPoints;
        break;
      case 'subtraction':
        points = profile.subPoints;
        break;
      case 'multiplication':
        points = profile.mulitPoints;
        break;
      case 'division':
        points = profile.divPoints;
        break;
      default:
        return null;
    }
    onData(null, {toggle, profile, points})
  }
};

export const depsMapper = (context, actions) => ({
  showMenu: actions.header.showMenu,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(IndexLayout);
