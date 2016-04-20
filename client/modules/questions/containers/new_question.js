import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewQuestion from '../components/new_question.jsx';
import { _ } from 'lodash';

export const composer = ({context, questionId}, onData) => {
  const {LocalState, Collections} = context();
  if(Meteor.subscribe('question.show', questionId).ready()){
    const question = Collections.ArithmeticQuestions.find().fetch()[0];
    console.log(question)
    LocalState.set('OPERATOR', question.operator);
    LocalState.set('GUESS', '');
    LocalState.set('START', new Date());
    LocalState.set('QUESTION', {
      num1: _.random(parseInt(question.min), parseInt(question.max)),
      num2: _.random(parseInt(question.min), parseInt(question.max))
    });
    nums = LocalState.get('QUESTION');
    onData(null, {nums});
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

