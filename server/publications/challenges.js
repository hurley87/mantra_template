import {Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function (){ 
  Meteor.publish('challenges.list', function(parentId) {
    check(parentId, String);
    const challenges = Challenges.find({'parentId': parentId });
    return challenges;
  });
  Meteor.publish('challenges.student', function(studentId) {
    check(studentId, String);
    const challenges = Challenges.find({'studentId': studentId });
    return challenges;
  });
}