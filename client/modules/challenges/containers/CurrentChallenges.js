import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import CurrentChallenges from '../components/CurrentChallenges.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  const parentId = Meteor.userId();
  console.log(parentId)
  if(Meteor.subscribe('challenges.list', parentId).ready()){
  	const challenges = Collections.Challenges.find({}).fetch();
    console.log(challenges)
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
)(CurrentChallenges);
