import {Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'new.challenge'(challenge, parentId, studentId){
        check(challenge, Object);
        check(parentId, String)
        check(studentId, String)
        Challenges.insert({
        	parentId: parentId,
            studentId: studentId,
        	challenge: challenge,
            complete: false
        });
    },
    'edit.challenge'(challenge){
        check(challenge, Object);
        Challenges.update({ _id: challenge.challengeId}, {
            $set: {
                'challenge.max': challenge.max,
                'challenge.min': challenge.min,
                'challenge.reward': challenge.reward,
                'challenge.right': challenge.right,
                'challenge.time': challenge.time,
                'challenge.operator': challenge.operator
            }
        })
    }
  });
}