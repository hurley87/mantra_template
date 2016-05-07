import {CountingAnswers, Profiles, ArithmeticQuestions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'counting.insert'(answer) {
      check(answer, Object);
      const counting_answer = answer.answer;
      const counting_guess = answer.guess;
      const points = Profiles.find({ 'user': answer.userId }).fetch()[0].countPoints;
      const difficulty = ArithmeticQuestions.findOne(answer.questionId).difficulty;
      if(counting_answer == counting_guess) {
        Meteor.call('counting.right', points, difficulty, answer.userId);
      } else {
        Meteor.call('counting.wrong', points, difficulty, answer.userId);
      }
      CountingAnswers.insert(answer);
    },
    'counting.wrong'(points, difficulty, userId) {
      check(points, Number);
      check(difficulty, Number);
      check(userId, String);
      if(points >= difficulty) {
        Profiles.update( { "user": userId }, { $inc: { wrong: 1, countPoints: -difficulty }});
      } else {
        Profiles.update( { "user": question.userId }, { $set: { countPoints: 0 }, $inc: { wrong: 1 }});
      }
    },
    'counting.right'(points, difficulty, userId) {
      check(points, Number);
      check(difficulty, Number);
      check(userId, String);
      Profiles.update( { "user": userId }, { $inc: { right: 1, countPoints: difficulty }});
    }
  });
}