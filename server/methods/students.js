import {CountingAnswers, Profiles, ArithmeticQuestions, Students, Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { Email } from 'meteor/email';

export default function () {
  Meteor.methods({
    'insert.student'(student, userEmail) {
    	check(student, Object);
        check(userEmail, String);
        const parentId = student.parentId;
        const studentId = student.students[0];
        const challenge1 = { time: "15", right: '10', wrong: '2',  min: "1", max: "5", operator: '+', reward: 'Add1' };
        const challenge2 = { time: "30", right: '20', wrong: '2',  min: "1", max: "5", operator: '+', reward: 'Add2' };
        const challenge3 = { time: "45", right: '30', wrong: '2',  min: "1", max: "9", operator: '+', reward: 'Add3' };
        const challenge4 = { time: "60", right: '45', wrong: '2',  min: "1", max: "9", operator: '+', reward: 'Add4' };
        const challenge5 = { time: "15", right: '10', wrong: '2',  min: "1", max: "5", operator: '-', reward: 'Subtract1' };
        const challenge6 = { time: "30", right: '20', wrong: '2',  min: "1", max: "5", operator: '-', reward: 'Subtract2' };
        const challenge7 = { time: "45", right: '30', wrong: '2',  min: "1", max: "9", operator: '-', reward: 'Subtract3' };
        const challenge8 = { time: "60", right: '45', wrong: '2',  min: "1", max: "9", operator: '-', reward: 'Subtract4' };
        const challenge9 = { time: "15", right: '10', wrong: '2',  min: "1", max: "5", operator: 'x', reward: 'Multiply1' };
        const challenge10 = { time: "30", right: '20', wrong: '2',  min: "1", max: "5", operator: 'x', reward: 'Multiply2' };
        const challenge11 = { time: "45", right: '30', wrong: '2',  min: "1", max: "9", operator: 'x', reward: 'Multiply3' };
        const challenge12 = { time: "60", right: '45', wrong: '2',  min: "1", max: "9", operator: 'x', reward: 'Multiply4' };
        const challenge13 = { time: "15", right: '10', wrong: '2',  min: "1", max: "5", operator: '/', reward: 'Divide1' };
        const challenge14 = { time: "30", right: '20', wrong: '2',  min: "1", max: "5", operator: '/', reward: 'Divide2' };
        const challenge15 = { time: "45", right: '30', wrong: '2',  min: "1", max: "9", operator: '/', reward: 'Divide3' };
        const challenge16 = { time: "60", right: '45', wrong: '2',  min: "1", max: "9", operator: '/', reward: 'Divide4' };
        Meteor.call('new.challenge', challenge1, parentId, studentId);
        Meteor.call('new.challenge', challenge2, parentId, studentId);
        Meteor.call('new.challenge', challenge3, parentId, studentId);
        Meteor.call('new.challenge', challenge4, parentId, studentId);
        Meteor.call('new.challenge', challenge5, parentId, studentId);
        Meteor.call('new.challenge', challenge6, parentId, studentId);
        Meteor.call('new.challenge', challenge7, parentId, studentId);
        Meteor.call('new.challenge', challenge8, parentId, studentId);
        Meteor.call('new.challenge', challenge9, parentId, studentId);
        Meteor.call('new.challenge', challenge10, parentId, studentId);
        Meteor.call('new.challenge', challenge11, parentId, studentId);
        Meteor.call('new.challenge', challenge12, parentId, studentId);
        Meteor.call('new.challenge', challenge13, parentId, studentId);
        Meteor.call('new.challenge', challenge14, parentId, studentId);
        Meteor.call('new.challenge', challenge15, parentId, studentId);
        Meteor.call('new.challenge', challenge16, parentId, studentId);
    	Students.insert(student);

        this.unblock();

        Email.send({
          to: userEmail,
          from: 'dhurls99@gmail.com',
          subject: 'Thanks for joining!',
          html: 'Your the best. You can email me at any time.'
        });
    },
    'remove.user'(studentId) {
    	check(studentId, String);
    	Meteor.users.remove({_id: studentId});
    },
    'create.student'(student) {
        check(student, Object);
        const studentId = Accounts.createUser({ username: student.username, password: student.password });
        const parentId = student.parentId;
        const challenge1 = { time: "20", right: '12', wrong: '2',  min: "1", max: "5", operator: '+', reward: 'Add1' };
        const challenge2 = { time: "40", right: '30', wrong: '2',  min: "1", max: "5", operator: '+', reward: 'Add2' };
        const challenge3 = { time: "20", right: '12', wrong: '2',  min: "1", max: "9", operator: '+', reward: 'Add3' };
        const challenge4 = { time: "40", right: '30', wrong: '2',  min: "1", max: "9", operator: '+', reward: 'Add4' };
        const challenge5 = { time: "20", right: '12', wrong: '2',  min: "1", max: "5", operator: '-', reward: 'Subtract1' };
        const challenge6 = { time: "40", right: '30', wrong: '2',  min: "1", max: "5", operator: '-', reward: 'Subtract2' };
        const challenge7 = { time: "20", right: '12', wrong: '2',  min: "1", max: "9", operator: '-', reward: 'Subtract3' };
        const challenge8 = { time: "40", right: '30', wrong: '2',  min: "1", max: "9", operator: '-', reward: 'Subtract4' };
        const challenge9 = { time: "20", right: '12', wrong: '2',  min: "1", max: "5", operator: 'x', reward: 'Multiply1' };
        const challenge10 = { time: "40", right: '30', wrong: '2',  min: "1", max: "5", operator: 'x', reward: 'Multiply2' };
        const challenge11 = { time: "20", right: '12', wrong: '2',  min: "1", max: "9", operator: 'x', reward: 'Multiply3' };
        const challenge12 = { time: "40", right: '30', wrong: '2',  min: "1", max: "9", operator: 'x', reward: 'Multiply4' };
        const challenge13 = { time: "20", right: '12', wrong: '2',  min: "1", max: "5", operator: '/', reward: 'Divide1' };
        const challenge14 = { time: "40", right: '30', wrong: '2',  min: "1", max: "5", operator: '/', reward: 'Divide2' };
        const challenge15 = { time: "20", right: '12', wrong: '2',  min: "1", max: "9", operator: '/', reward: 'Divide3' };
        const challenge16 = { time: "40", right: '30', wrong: '2',  min: "1", max: "9", operator: '/', reward: 'Divide4' };
        Meteor.call('new.challenge', challenge1, parentId, studentId);
        Meteor.call('new.challenge', challenge2, parentId, studentId);
        Meteor.call('new.challenge', challenge3, parentId, studentId);
        Meteor.call('new.challenge', challenge4, parentId, studentId);
        Meteor.call('new.challenge', challenge5, parentId, studentId);
        Meteor.call('new.challenge', challenge6, parentId, studentId);
        Meteor.call('new.challenge', challenge7, parentId, studentId);
        Meteor.call('new.challenge', challenge8, parentId, studentId);
        Meteor.call('new.challenge', challenge9, parentId, studentId);
        Meteor.call('new.challenge', challenge10, parentId, studentId);
        Meteor.call('new.challenge', challenge11, parentId, studentId);
        Meteor.call('new.challenge', challenge12, parentId, studentId);
        Meteor.call('new.challenge', challenge13, parentId, studentId);
        Meteor.call('new.challenge', challenge14, parentId, studentId);
        Meteor.call('new.challenge', challenge15, parentId, studentId);
        Meteor.call('new.challenge', challenge16, parentId, studentId);
        Students.update({ parentId: parentId }, { $push: { students: studentId }})
    }

  });
}