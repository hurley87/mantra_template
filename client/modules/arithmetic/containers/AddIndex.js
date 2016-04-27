import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import AddIndex from '../components/AddIndex.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const userId = Meteor.userId();
  if(userId && Meteor.subscribe('profiles.single', userId).ready() && Meteor.subscribe('addition_questions.index').ready()){
    const profile = Collections.Profiles.find({"user": userId}).fetch()[0];
    const points = profile.points;
    const complete = Collections.ArithmeticQuestions.find({'upperLimit': { $lt: points }}).fetch();
    const locked = Collections.ArithmeticQuestions.find({'lowerLimit': { $gt: points }}).fetch();
    const current = Collections.ArithmeticQuestions.find({ 'lowerLimit': { $lt: points}, 'upperLimit': { $gt: points}}).fetch();
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
