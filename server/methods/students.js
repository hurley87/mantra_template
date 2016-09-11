import {CountingAnswers, Profiles, ArithmeticQuestions, Students, Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'insert.student'(student) {
    	check(student, Object);
        const parentId = student.parentId;
        const studentId = student.students[0];
        const challenge1 = { time: "10", right: '3', min: "2", max: "7", operator: '+', reward: 'awesome reward 1'}
        const challenge2 = { time: "15", right: '5', min: "2", max: "10", operator: '+', reward: 'awesome reward 2'}
        const challenge3 = { time: "20", right: '10', min: "2", max: "10", operator: '+', reward: 'awesome reward 3'}
        const challenge4 = { time: "25", right: '15', min: "2", max: "12", operator: '+', reward: 'awesome reward 4'}
        const challenge5 = { time: "30", right: '20', min: "2", max: "15", operator: '+', reward: 'awesome reward 5'}
        Meteor.call('new.challenge', challenge1, parentId, studentId);
        Meteor.call('new.challenge', challenge2, parentId, studentId);
        Meteor.call('new.challenge', challenge3, parentId, studentId);
        Meteor.call('new.challenge', challenge4, parentId, studentId);
        Meteor.call('new.challenge', challenge5, parentId, studentId);
    	Students.insert(student);
    },
    'remove.user'(studentId) {
    	check(studentId, String);
    	Meteor.users.remove({_id: studentId});
    }
  });
}