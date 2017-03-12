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
        for(let i = 1; i <= 10; i += 1) {
            let reward = "Add" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: '+',
                reward: reward
            }, parentId, studentId)
        }
        for(let i = 1; i <= 10; i += 1) {
            let reward = "Subtract" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: '-',
                reward: reward
            }, parentId, studentId)
        }
        for(let i = 1; i <= 10; i += 1) {
            let reward = "Multiply" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: 'x',
                reward: reward
            }, parentId, studentId)
        }
        for(let i = 1; i <= 10; i += 1) {
            let reward = "Divide" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: '/',
                reward: reward
            }, parentId, studentId)
        }
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
        const studentId = Accounts.createUser({ username: student.username, password: student.password,
            profile: {
                gameId: student.password
            }
        });
        const parentId = student.parentId;

        for(let i = 1; i <= 10; i += 1) {
            let reward = "Add" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: '+',
                reward: reward
            }, parentId, studentId)
        }
        for(let i = 1; i <= 10; i += 1) {
            let reward = "Subtract" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: '-',
                reward: reward
            }, parentId, studentId)
        }
        for(let i = 1; i <= 10; i += 1) {
            let reward = "Multiply" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: 'x',
                reward: reward
            }, parentId, studentId)
        }
        for(let i = 1; i <= 10; i += 1) {
            let reward = "Divide" + i
            Meteor.call('new.challenge', {
                time: (i*5).toString(),
                right: (i*3).toString(),
                wrong: '2',
                min: "1",
                max: "9",
                operator: '/',
                reward: reward
            }, parentId, studentId)
        }
        Students.update({ parentId: parentId }, { $push: { students: studentId }})
    }

  });
}