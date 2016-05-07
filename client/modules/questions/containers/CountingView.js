import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import CountingView from '../components/CountingView.jsx';
import { _ } from 'lodash';

export const composer = ({context, questionId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();

  // bring down the question of the current page
  // set the question to LocalState
  if(Meteor.subscribe('question.show', questionId).ready()){
    const question = Collections.ArithmeticQuestions.find().fetch()[0];
    LocalState.set('GUESS', '');
    LocalState.set('START', new Date());
    LocalState.set('QUESTION', {
      num1: _.random(parseInt(question.min), parseInt(question.max)),
      num2: _.random(parseInt(question.min), parseInt(question.max))
    });

    // use the user's Id to access their profile data
    const userId = Meteor.userId();
    if(userId && Meteor.subscribe('profiles.single', userId).ready()){
      const profile = Collections.Profiles.find({"user": userId}).fetch()[0];
      // for the QuestionHeader component we need user points (profile data), a header, 
      // and a link beack to the  quetions associated index page
      const points = profile.countPoints;
      const header = 'Counting';
      const link = '/counting'

      // calculate the percentage for the Progress component
      // redirect page if the percentage is under 0% or over 100%
      const lowerLimit = question.lowerLimit;
      const upperLimit = question.upperLimit;
      const percentageCalc = (points - lowerLimit) / upperLimit * 100
      const percentage = percentageCalc.toString();
      if(percentage <= 100 && percentage >= 0) {
        onData(null, {profile, percentage, points, header, link, question});
      } else {
        FlowRouter.go(link)
      }
    }
  }
};

export const depsMapper = (context, actions) => ({
  guess: actions.counting.guess,
  getQuestion: actions.counting.getQuestion,
  clickNumber: actions.counting.clickNumber,
  clearInput: actions.counting.clearInput,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CountingView);
