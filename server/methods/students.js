import {CountingAnswers, Profiles, ArithmeticQuestions, Students} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'insert.student'(student) {
    	check(student, Object);
    	Students.insert(student);
    },
    'remove.user'(studentId) {
    	check(studentId, String);
    	Meteor.users.remove({_id: studentId});
    }
  });
}