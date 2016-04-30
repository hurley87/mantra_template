import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import AddIndex from '../components/MultiIndex.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const userId = Meteor.userId();
  if(userId && Meteor.subscribe('profiles.single', userId).ready() && Meteor.subscribe('multiplication_questions.index').ready()){
    const profile = Collections.Profiles.find({"user": userId}).fetch()[0];
    const points = profile.multiPoints;
    const complete = Collections.ArithmeticQuestions.find({'upperLimit': { $lt: points }}).fetch();
    const locked = Collections.ArithmeticQuestions.find({'lowerLimit': { $gte: points }}).fetch();
    const current = Collections.ArithmeticQuestions.find({ 'lowerLimit': { $lt: points}, 'upperLimit': { $gte: points}}).fetch();
    onData(null, {complete, current, locked})
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddIndex);
