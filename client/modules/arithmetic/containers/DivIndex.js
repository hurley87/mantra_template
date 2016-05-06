import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import AddIndex from '../components/DivIndex.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const userId = Meteor.userId();
  if(userId && Meteor.subscribe('profiles.single', userId).ready() && Meteor.subscribe('division_questions.index').ready()){
    const points = Collections.Profiles.find({"user": userId}).fetch()[0].divPoints;
    const questions = Collections.ArithmeticQuestions.find({}).fetch();
    onData(null, {points, questions});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddIndex);
