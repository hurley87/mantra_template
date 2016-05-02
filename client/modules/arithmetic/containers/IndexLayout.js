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
        percentage = profile.addPoints / 3;
        break;
      case 'subtraction':
        points = profile.subPoints;
        percentage = profile.subPoints / 1.5;
        break;
      case 'multiplication':
        points = profile.multiPoints;
        percentage = profile.multiPoints / 1.5;
        break;
      case 'division':
        points = profile.divPoints;
        percentage = profile.divPoints / 1.5;
        break;
      default:
        return null;
    }
    onData(null, {toggle, profile, points, percentage})
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
