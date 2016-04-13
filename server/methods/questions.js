import {Questions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'createQuestion'(question) {
      check(question, Object);
      Questions.insert(question);
    }
  });
}