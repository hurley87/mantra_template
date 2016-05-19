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
      upperLimit: 9,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second ADD module.',
      operator: '+',
      lowerLimit: 10,
      upperLimit: 19,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third ADD module.',
      operator: '+',
      lowerLimit: 20,
      upperLimit: 29,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth ADD module.',
      operator: '+',
      lowerLimit: 30,
      upperLimit: 39,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth ADD module.',
      operator: '+',
      lowerLimit: 40,
      upperLimit: 49,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth ADD module.',
      operator: '+',
      lowerLimit: 50,
      upperLimit: 59,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth ADD module.',
      operator: '+',
      lowerLimit: 60,
      upperLimit: 69,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '8',
      max: '13',
      title: 'This is the first ADD module.',
      operator: '+',
      lowerLimit: 70,
      upperLimit: 79,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '9',
      max: '14',
      title: 'This is the second ADD module.',
      operator: '+',
      lowerLimit: 80,
      upperLimit: 89,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '10',
      max: '15',
      title: 'This is the second ADD module.',
      operator: '+',
      lowerLimit: 90,
      upperLimit: 100,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '0',
      max: '5',
      title: 'This is the first SUB module.',
      operator: '-',
      lowerLimit: 0,
      upperLimit: 9,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second SUB module.',
      operator: '-',
      lowerLimit: 10,
      upperLimit: 19,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third SUB module.',
      operator: '-',
      lowerLimit: 20,
      upperLimit: 29,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth SUB module.',
      operator: '-',
      lowerLimit: 30,
      upperLimit: 39,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth SUB module.',
      operator: '-',
      lowerLimit: 40,
      upperLimit: 49,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth SUB module.',
      operator: '-',
      lowerLimit: 50,
      upperLimit: 59,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth SUB module.',
      operator: '-',
      lowerLimit: 60,
      upperLimit: 69,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '8',
      max: '13',
      title: 'This is the first SUB module.',
      operator: '-',
      lowerLimit: 70,
      upperLimit: 79,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '9',
      max: '14',
      title: 'This is the second SUB module.',
      operator: '-',
      lowerLimit: 80,
      upperLimit: 89,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '10',
      max: '15',
      title: 'This is the second ADD module.',
      operator: '-',
      lowerLimit: 90,
      upperLimit: 100,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '5',
      title: 'This is the first SMULTImodule.',
      operator: 'x',
      lowerLimit: 0,
      upperLimit: 9,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second MULTI module.',
      operator: 'x',
      lowerLimit: 10,
      upperLimit: 19,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third SMULTImodule.',
      operator: 'x',
      lowerLimit: 20,
      upperLimit: 29,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth MULTI module.',
      operator: 'x',
      lowerLimit: 30,
      upperLimit: 39,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth SMULTImodule.',
      operator: 'x',
      lowerLimit: 40,
      upperLimit: 49,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth SMULTImodule.',
      operator: 'x',
      lowerLimit: 50,
      upperLimit: 59,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth SMULTImodule.',
      operator: 'x',
      lowerLimit: 60,
      upperLimit: 69,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '8',
      max: '13',
      title: 'This is the first SMULTImodule.',
      operator: 'x',
      lowerLimit: 70,
      upperLimit: 79,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '9',
      max: '14',
      title: 'This is the second MULTI module.',
      operator: 'x',
      lowerLimit: 80,
      upperLimit: 89,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '10',
      max: '15',
      title: 'This is the second MULTI module.',
      operator: 'x',
      lowerLimit: 90,
      upperLimit: 100,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '5',
      title: 'This is the first SDIVmodule.',
      operator: '/',
      lowerLimit: 0,
      upperLimit: 9,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the second DIV module.',
      operator: '/',
      lowerLimit: 10,
      upperLimit: 19,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '8',
      title: 'This is the third SDIVmodule.',
      operator: '/',
      lowerLimit: 20,
      upperLimit: 29,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '9',
      title: 'This is the fourth DIV module.',
      operator: '/',
      lowerLimit: 30,
      upperLimit: 39,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '5',
      max: '10',
      title: 'This is the fifth SDIVmodule.',
      operator: '/',
      lowerLimit: 40,
      upperLimit: 49,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '6',
      max: '11',
      title: 'This is the sixth SDIVmodule.',
      operator: '/',
      lowerLimit: 50,
      upperLimit: 59,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '7',
      max: '12',
      title: 'This is the sixth SDIVmodule.',
      operator: '/',
      lowerLimit: 60,
      upperLimit: 69,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '8',
      max: '13',
      title: 'This is the first SDIVmodule.',
      operator: '/',
      lowerLimit: 70,
      upperLimit: 79,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '9',
      max: '14',
      title: 'This is the second DIV module.',
      operator: '/',
      lowerLimit: 80,
      upperLimit: 89,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '10',
      max: '15',
      title: 'This is the second DIV module.',
      operator: '/',
      lowerLimit: 90,
      upperLimit: 100,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '3',
      title: 'This is the first SCOUNTmodule.',
      operator: 'c',
      lowerLimit: 0,
      upperLimit: 9,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '4',
      title: 'This is the second COUNT module.',
      operator: 'c',
      lowerLimit: 10,
      upperLimit: 19,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '5',
      title: 'This is the third SCOUNTmodule.',
      operator: 'c',
      lowerLimit: 20,
      upperLimit: 29,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '1',
      max: '6',
      title: 'This is the fourth COUNT module.',
      operator: 'c',
      lowerLimit: 30,
      upperLimit: 39,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '6',
      title: 'This is the fifth SCOUNTmodule.',
      operator: 'c',
      lowerLimit: 40,
      upperLimit: 49,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the sixth SCOUNTmodule.',
      operator: 'c',
      lowerLimit: 50,
      upperLimit: 59,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '2',
      max: '7',
      title: 'This is the sixth SCOUNTmodule.',
      operator: 'c',
      lowerLimit: 60,
      upperLimit: 69,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '7',
      title: 'This is the first SCOUNTmodule.',
      operator: 'c',
      lowerLimit: 70,
      upperLimit: 79,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '3',
      max: '7',
      title: 'This is the second COUNT module.',
      operator: 'c',
      lowerLimit: 80,
      upperLimit: 89,
      difficulty: 1
    });
    ArithmeticQuestions.insert({
      min: '4',
      max: '7',
      title: 'This is the second COUNT module.',
      operator: 'c',
      lowerLimit: 90,
      upperLimit: 100,
      difficulty: 1
    });
  });
}