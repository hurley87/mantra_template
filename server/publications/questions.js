import {Questions, Answers, Usernames} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
  Meteor.publish('user_questions', function (operator, userId) {
    check(operator, String);
    check(userId, String);
    return Questions.find({ 'operator': operator, 'userId': userId });
  });
  Meteor.publish('all_user_questions', function (userId) {
    check(userId, String);
    return Questions.find({ 'userId': userId });
  });
  Meteor.publish('answers', function (studentId) {
    check(studentId, String);
    return Answers.find({'userId': studentId}, { limit: 10 });
  });
  Meteor.publish('answer.view', function (answerId) {
    check(answerId, String);
    return Answers.find({'_id': answerId});
  });
  Meteor.publish('usernames', function () {
    return Usernames.find({});
  });
}