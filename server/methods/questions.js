import {Questions, ArithmeticQuestions, Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'createQuestion'(question) {
      check(question, Object);
      const guess = question.guess;
      const answer = question.answer;
      const level = ArithmeticQuestions.findOne(question.questionId);
      if (guess == answer) {
        Meteor.call('rightAnswer', question.userId, level.difficulty);
      } else {
        Meteor.call('wrongAnswer', question.userId, level.difficulty);
      }
      Questions.insert(question);
    },
    'wrongAnswer'(userId, difficulty) {
      check(userId, String);
      check(difficulty, Number);
      Profiles.update( { "user": userId }, {
        $inc: {
          wrong: 1,
          points: -difficulty
        }
      });
    },
    'rightAnswer'(userId, difficulty) {
      check(userId, String);
      check(difficulty, Number);
      Profiles.update({ "user": userId }, {
        $inc: {
          right: 1,
          points: difficulty
        }
      });
    }
  });
}