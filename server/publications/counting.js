import {CountingAnswers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
  Meteor.publish('counting_answers', function (userId) {
    check(userId, String);
    return CountingAnswers.find({'userId': userId });
  });
}