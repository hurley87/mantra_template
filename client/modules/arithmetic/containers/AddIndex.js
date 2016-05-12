import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import AddIndex from '../components/AddIndex.jsx';
import Loading from '../components/Loading.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const userId = Meteor.userId();
  if(userId && Meteor.subscribe('profiles.single', userId).ready() && Meteor.subscribe('addition_questions.index').ready()){
    const points = Collections.Profiles.find({"user": userId}).fetch()[0].addPoints;
    const questions = Collections.ArithmeticQuestions.find({}).fetch();
    onData(null, {points, questions})
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loading),
  useDeps(depsMapper)
)(AddIndex);
