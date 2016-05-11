import {ArithmeticQuestions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.startup(function () {
    ArithmeticQuestions.remove({});
    ArithmeticQuestions.insert({
      min: '0',
      max: '5',
      title: 'This is the first ADD module.',
      operator: '+',
      lowerLimit: 0,
      upperLimit: 5,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second ADD module.',
      operator: '+',
      lowerLimit: 6,
      upperLimit: 15,
      difficulty: 2
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third ADD module.',
      operator: '+',
      lowerLimit: 16,
      upperLimit: 30,
      difficulty: 3
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth ADD module.',
      operator: '+',
      lowerLimit: 31,
      upperLimit: 40,
      difficulty: 4
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth ADD module.',
      operator: '+',
      lowerLimit: 41,
      upperLimit: 70,
      difficulty: 5
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth ADD module.',
      operator: '+',
      lowerLimit: 71,
      upperLimit: 100,
      difficulty: 6
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth ADD module.',
      operator: '+',
      lowerLimit: 101,
      upperLimit: 150,
      difficulty: 7
    });
    ArithmeticQuestions.insert({
      min: '0',
      max: '5',
      title: 'This is the first subtraction module.',
      operator: '-',
      lowerLimit: 0,
      upperLimit: 5,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second subtraction module.',
      operator: '-',
      lowerLimit: 6,
      upperLimit: 15,
      difficulty: 2
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third subtraction module.',
      operator: '-',
      lowerLimit: 16,
      upperLimit: 30,
      difficulty: 3
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth subtraction module.',
      operator: '-',
      lowerLimit: 31,
      upperLimit: 40,
      difficulty: 4
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth subtraction module.',
      operator: '-',
      lowerLimit: 41,
      upperLimit: 70,
      difficulty: 5
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth subtraction module.',
      operator: '-',
      lowerLimit: 71,
      upperLimit: 100,
      difficulty: 6
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth subtraction module.',
      operator: '-',
      lowerLimit: 101,
      upperLimit: 150,
      difficulty: 7
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '5',
      title: 'This is the first multiplication module.',
      operator: 'x',
      lowerLimit: 0,
      upperLimit: 5,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second multiplication module.',
      operator: 'x',
      lowerLimit: 6,
      upperLimit: 15,
      difficulty: 2
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third multiplication module.',
      operator: 'x',
      lowerLimit: 16,
      upperLimit: 30,
      difficulty: 3
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth multiplication module.',
      operator: 'x',
      lowerLimit: 31,
      upperLimit: 40,
      difficulty: 4
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth multiplication module.',
      operator: 'x',
      lowerLimit: 41,
      upperLimit: 70,
      difficulty: 5
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth multiplication module.',
      operator: 'x',
      lowerLimit: 71,
      upperLimit: 100,
      difficulty: 6
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth multiplication module.',
      operator: 'x',
      lowerLimit: 101,
      upperLimit: 150,
      difficulty: 7
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '5',
      title: 'This is the first division module.',
      operator: '/',
      lowerLimit: 0,
      upperLimit: 5,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second division module.',
      operator: '/',
      lowerLimit: 6,
      upperLimit: 15,
      difficulty: 2
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third division module.',
      operator: '/',
      lowerLimit: 16,
      upperLimit: 30,
      difficulty: 3
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth division module.',
      operator: '/',
      lowerLimit: 31,
      upperLimit: 40,
      difficulty: 4
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth division module.',
      operator: '/',
      lowerLimit: 41,
      upperLimit: 70,
      difficulty: 5
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth division module.',
      operator: '/',
      lowerLimit: 71,
      upperLimit: 100,
      difficulty: 6
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth division module.',
      operator: '/',
      lowerLimit: 101,
      upperLimit: 150,
      difficulty: 7
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '3',
      title: 'This is the first counting module.',
      operator: 'c',
      lowerLimit: 0,
      upperLimit: 5,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '4',
      title: 'This is the second counting module.',
      operator: 'c',
      lowerLimit: 6,
      upperLimit: 15,
      difficulty: 2
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '5',
      title: 'This is the third counting module.',
      operator: 'c',
      lowerLimit: 16,
      upperLimit: 30,
      difficulty: 3
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '5',
      title: 'This is the fourth counting module.',
      operator: 'c',
      lowerLimit: 31,
      upperLimit: 40,
      difficulty: 4
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '6',
      title: 'This is the fifth counting module.',
      operator: 'c',
      lowerLimit: 41,
      upperLimit: 70,
      difficulty: 5
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '7',
      title: 'This is the sixth counting module.',
      operator: 'c',
      lowerLimit: 71,
      upperLimit: 100,
      difficulty: 6
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '8',
      title: 'This is the sixth counting module.',
      operator: 'c',
      lowerLimit: 101,
      upperLimit: 150,
      difficulty: 7
    });
  });
}