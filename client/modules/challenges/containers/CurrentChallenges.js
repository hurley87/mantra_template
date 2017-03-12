import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import CurrentChallenges from '../components/CurrentChallenges.jsx';
import { _ } from 'lodash';

export const composer = ({context, studentId, operator}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  const parentId = Meteor.userId();
  
  if(Meteor.subscribe('challenges.list', parentId).ready()){
  	const challenges = Collections.Challenges.find({ complete: false, studentId: studentId, 'challenge.operator': operator }).fetch();
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
