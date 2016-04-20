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
      min: '6',
      max: '11',
      title: 'This is the sixth addition module.',
      operator: '+'
    });
  });
}