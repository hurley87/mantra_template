import {CountingAnswers, Profiles, ArithmeticQuestions, Students, Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

export default function () {
  Meteor.methods({
    'insert.student'(student) {
    	check(student, Object);
        const parentId = student.parentId;
        const studentId = student.students[0];
        [
            { time: "10", right: '3', wrong: '2', min: "2", max: "7", operator: '+', reward: student.reward1},
            { time: "15", right: '5', wrong: '2', min: "2", max: "10", operator: '+', reward: student.reward2},
            { time: "20", right: '10', wrong: '2', min: "2", max: "10", operator: '+', reward: student.reward3}

        ].map( challenge => { Meteor.call('new.challenge', challenge, parentId, studentId)})
        
    	Students.insert(student);
    },
    'remove.user'(studentId) {
    	check(studentId, String);
    	Meteor.users.remove({_id: studentId});
    },
    'create.student'(student) {
        check(student, Object);
        const studentId = Accounts.createUser({ username: student.username, password: student.password });
        const parentId = student.parentId;
        [
            { time: "10", right: '3', wrong: '2', min: "2", max: "7", operator: '+', reward: student.reward},
            { time: "15", right: '5', wrong: '2', min: "2", max: "10", operator: '+', reward: student.reward},
            { time: "20", right: '10', wrong: '2', min: "2", max: "10", operator: '+', reward: student.reward}

        ].map( challenge => { Meteor.call('new.challenge', challenge, parentId, studentId)})
        Students.update({ parentId: parentId }, { $push: { students: studentId }})
    }

  });
}