import {ArithmeticQuestions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
  Meteor.publish('addition_questions.index', function () {
    return ArithmeticQuestions.find({ 'operator': '+'});
  });
  Meteor.publish('subtraction_questions.index', function () {
    return ArithmeticQuestions.find({ 'operator': '-'});
  });
  Meteor.publish('multiplication_questions.index', function () {
    return ArithmeticQuestions.find({ 'operator': '*'});
  });
  Meteor.publish('division_questions.index', function () {
    return ArithmeticQuestions.find({ 'operator': '/'});
  });
}