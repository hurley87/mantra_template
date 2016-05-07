import { _ } from 'lodash';

export default {
  getQuestion({LocalState, Meteor}) {
    const startingNum = LocalState.get('QUESTION').num1;
    const series = [startingNum, startingNum + 1, startingNum + 2];
    const hiddenIndex = _.random(0, series.length - 1)
    const answer = series[hiddenIndex];
    series[hiddenIndex] = '_';
    const num1 = series[0];
    const num2 = series[1];
    const num3 = series[2];
    LocalState.set("COUNTING_QUESTION", {
      num1: num1,
      num2: num2,
      num3: num3,
      answer: answer
    })
    return num1 + " " + num2 + " " + num3;
  },
  guess({LocalState}) {
    return LocalState.get('GUESS');
  },
  clickNumber({LocalState}, guess, questionId) {
    const counting_question = LocalState.get('COUNTING_QUESTION');
    const answer = {
      questionId: questionId,
      userId: Meteor.userId(),
      guess: guess,
      answer: counting_question.answer,
      num1: counting_question.num1,
      num2: counting_question.num2,
      num3: counting_question.num3,
      start_time: LocalState.get('START'),
      end_time: new Date()
    }
    handleCountingSubmission(LocalState, answer);
  }, 
  clearInput({LocalState}) {
    LocalState.set('GUESS', '');
  }
}

function handleCountingSubmission(LocalState, answer) {
  Meteor.call('counting.insert', answer, (err) => {
    if (err) {
      console.log(err)
    } else {
      resetQuestion(LocalState);
    }
  });
}

function resetQuestion(LocalState) {
  LocalState.set("QUESTION", {
    num1: 5
  })
}