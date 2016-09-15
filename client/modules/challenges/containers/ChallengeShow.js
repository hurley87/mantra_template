import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import ChallengeShow from '../components/ChallengeShow.jsx';
import { _ } from 'lodash';

export const composer = ({context, challengeId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  if(Meteor.subscribe('challenges.single', challengeId).ready()){
  	const challenge = Collections.Challenges.find({ _id: challengeId }).fetch()[0];
  	const studentId = challenge.studentId;
  	if(Meteor.subscribe('student', studentId).ready() && Meteor.subscribe('answers.challenge', challengeId)) {
  		const student = Meteor.users.findOne(studentId);
      const answer = Collections.Answers.find({}).fetch()[0]
  		onData(null, {challenge, student, answer});
  	}
  }
};

export const depsMapper = (context, actions) => ({
  create: actions.challenges.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChallengeShow);