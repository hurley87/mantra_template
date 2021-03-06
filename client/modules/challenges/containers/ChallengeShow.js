import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import ChallengeShow from '../components/ChallengeShow.jsx';
import { _ } from 'lodash';

export const composer = ({context, challengeId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  if(Meteor.subscribe('challenges.single', challengeId).ready()){
  	const challenge = Collections.Challenges.find({ _id: challengeId }).fetch()[0];
  	const studentId = challenge.studentId;
    const parentId = Meteor.userId();
  	if(Meteor.subscribe('student', studentId).ready() && Meteor.subscribe('student', parentId) && Meteor.subscribe('answers.challenge', challengeId)) {
  		const student = Meteor.users.findOne(studentId);
      const parent = Meteor.users.findOne(parentId);
      const answer = Collections.Answers.find({}).fetch()
  		onData(null, {challenge, student, answer, parent});
  	}
  }
};

export const depsMapper = (context, actions) => ({
  create: actions.challenges.create,
  sendChallenge: actions.challenges.sendChallenge,
  textChallenge: actions.challenges.textChallenge,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChallengeShow);