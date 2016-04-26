import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewQuestion from '../components/new_question.jsx';
import { _ } from 'lodash';

export const composer = ({context, questionId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  if(Meteor.subscribe('question.show', questionId).ready()){
    const question = Collections.ArithmeticQuestions.find().fetch()[0];
    LocalState.set('OPERATOR', question.operator);
    LocalState.set('GUESS', '');
    LocalState.set('START', new Date());
    LocalState.set('QUESTION', {
      num1: _.random(parseInt(question.min), parseInt(question.max)),
      num2: _.random(parseInt(question.min), parseInt(question.max))
    });
    nums = LocalState.get('QUESTION');
    operator = LocalState.get('OPERATOR');
    const userId = Meteor.userId();
    if(userId && Meteor.subscribe('profiles.single', userId).ready()){
      const profile = Collections.Profiles.find({"user": userId}).fetch()[0];
      const lowerLimit = question.lowerLimit;
      const upperLimit = question.upperLimit;
      const points = profile.points;
      const percentageCalc = (points - lowerLimit) / upperLimit * 100
      const percentage = percentageCalc.toString();
      if(percentage < 100 && percentage > 0) {
        onData(null, {nums, operator, profile, percentage});
      } else {
        FlowRouter.go('/addition')
      }
    }
  }
};

export const depsMapper = (context, actions) => ({
  guess: actions.new_question.guess,
  question: actions.new_question.question,
  clickNumber: actions.new_question.clickNumber,
  intializeQuestionState: actions.new_question.intializeQuestionState,
  clearInput: actions.new_question.clearInput,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewQuestion);

