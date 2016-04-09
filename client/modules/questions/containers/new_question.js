import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewQuestion from '../components/new_question.jsx';

export const composer = ({context, operatorSign}, onData) => {
  const {LocalState} = context();
  LocalState.set('OPERATOR', operatorSign);
  LocalState.set('GUESS', '');
  LocalState.set('START', new Date());
  LocalState.set('QUESTION', {
    num1: Math.floor((Math.random() * 10) + 1),
    num2: Math.floor((Math.random() * 10) + 1)
  });
  nums = LocalState.get('QUESTION');
  onData(null, {nums});
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
