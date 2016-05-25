import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import StudentView from '../components/StudentView.jsx';
import { _ } from 'lodash';

export const composer = ({context, userId}, onData) => {
  const {LocalState, Collections} = context();
  if(userId && Meteor.subscribe('profiles.single', userId).ready()){
    const profile = Collections.Profiles.find({ 'user': userId}).fetch()[0];
    const points = profile.countPoints + profile.addPoints + profile.subPoints + profile.multiPoints + profile.divPoints;
    let ratio = (profile.wrong / profile.right).toFixed(2);
    if(isNaN(ratio)) {
      ratio = 0;
    }
    onData(null, {profile, points, ratio})
  }
  
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StudentView);
