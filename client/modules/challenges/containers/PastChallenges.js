import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import PastChallenges from '../components/PastChallenges.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  const parentId = Meteor.userId();
  if(Meteor.subscribe('challenges.list', parentId).ready()){
  	const challenges = Collections.Challenges.find({ complete: true }).fetch();
  	onData(null, {challenges});
  }
};

export const depsMapper = (context, actions) => ({
  create: actions.challenges.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PastChallenges);
