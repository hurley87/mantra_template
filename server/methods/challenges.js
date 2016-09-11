import {Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'new.challenge'(challenge, parentId, studentId){
        check(challenge, Object);
        check(parentId, String)
        check(studentId, String)
        console.log(challenge);
        console.log(parentId);
        console.log(studentId);
        Challenges.insert({
        	parentId: parentId,
            studentId: studentId,
        	challenge: challenge,
            complete: false
        });
    }
  });
}