import {Questions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
  Meteor.publish('user_questions', function (operator, userId) {
    check(operator, String);
    check(userId, String);
    return Questions.find({ 'operator': operator, 'userId': userId });
  });
}