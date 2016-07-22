import {Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'new.challenge'(challenge, parentId){
        check(challenge, Object);
        check(parentId, String)
        Challenges.insert({
        	parentId: parentId,
        	challenge: challenge
        });
    }
  });
}