import {ArithmeticQuestions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.startup(function () {
    ArithmeticQuestions.remove({});
    ArithmeticQuestions.insert({
      min: '0',
      max: '5',
      title: 'This is the first addition module.',
      operator: '+'
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second addition module.',
      operator: '+'
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third addition module.',
      operator: '+'
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth addition module.',
      operator: '+'
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth addition module.',
      operator: '+'
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth addition module.',
      operator: '+'
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth addition module.',
      operator: '+'
    });
    ArithmeticQuestions.insert({
      min: '0',
      max: '5',
      title: 'This is the first subtraction module.',
      operator: '-'
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second subtraction module.',
      operator: '-'
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third subtraction module.',
      operator: '-'
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth subtraction module.',
      operator: '-'
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth subtraction module.',
      operator: '-'
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth subtraction module.',
      operator: '-'
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth subtraction module.',
      operator: '-'
    });
    ArithmeticQuestions.insert({
      min: '0',
      max: '5',
      title: 'This is the first multiplication module.',
      operator: '*'
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second multiplication module.',
      operator: '*'
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third multiplication module.',
      operator: '*'
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth multiplication module.',
      operator: '*'
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth multiplication module.',
      operator: '*'
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth multiplication module.',
      operator: '*'
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth multiplication module.',
      operator: '*'
    });
    ArithmeticQuestions.insert({
      min: '0',
      max: '5',
      title: 'This is the first division module.',
      operator: '/'
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second division module.',
      operator: '/'
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third division module.',
      operator: '/'
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth division module.',
      operator: '/'
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth division module.',
      operator: '/'
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth division module.',
      operator: '/'
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth division module.',
      operator: '/'
    });
  });
}