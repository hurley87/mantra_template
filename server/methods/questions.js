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
        Meteor.call('rightAnswer', question, level.difficulty);
      } else {
        Meteor.call('wrongAnswer', question, level.difficulty);
      }
      Questions.insert(question);
    },
    'wrongAnswer'(question, difficulty) {
      check(question, Object);
      check(difficulty, Number);
      const profile = Profiles.find({ 'user': question.userId }).fetch()[0];
      let points = 0;
      switch(question.operator) {
        case '+':
          points = profile.addPoints;
          break;
        case '-':
          points = profile.subPoints;
          break;  
        case 'x':
          points = profile.multiPoints;
          break;
        case '/':
          points = profile.divPoints;
          break;
        default:
          return null;
      }
      if(points >= difficulty) {
        switch(question.operator) {
          case '+':
            Profiles.update( { "user": question.userId }, { $inc: { wrong: 1, addPoints: -difficulty }});
            break;
          case '-':
            Profiles.update( { "user": question.userId }, {$inc: { wrong: 1, subPoints: -difficulty }});
            break;
          case 'x':
            Profiles.update( { "user": question.userId }, { $inc: { wrong: 1, multiPoints: -difficulty }});
            break;
          case '/':
            Profiles.update( { "user": question.userId }, { $inc: { wrong: 1, divPoints: -difficulty }});
            break;
          default:
            return null;
        }
      } else {
        switch(question.operator) {
          case '+':
            Profiles.update( { "user": question.userId }, { $set: { addPoints: 0 }, $inc: { wrong: 1 }});
            break;
          case '-':
            Profiles.update( { "user": question.userId }, { $set: { subPoints: 0 }, $inc: { wrong: 1 }});
            break;
          case 'x':
            Profiles.update( { "user": question.userId }, { $set: { multiPoints: 0 }, $inc: { wrong: 1 }});
            break;
          case '/':
            Profiles.update( { "user": question.userId }, { $set: { divPoints: 0 }, $inc: { wrong: 1 }});
            break;
          default:
            return null;
        }
      }
    },
    'rightAnswer'(question, difficulty) {
      check(question, Object);
      check(difficulty, Number);
      switch(question.operator) {
        case '+':
          Profiles.update( { "user": question.userId }, { $inc: { right: 1, addPoints: difficulty }});
          break;
        case '-':
          Profiles.update( { "user": question.userId }, { $inc: { right: 1, subPoints: difficulty }});
          break;
        case 'x':
          Profiles.update( { "user": question.userId }, { $inc: { right: 1, multiPoints: difficulty }});
          break;
        case '/':
          Profiles.update( { "user": question.userId }, { $inc: { right: 1, divPoints: difficulty }});
          break;
        default:
          return null;
      }
    }
  });
}