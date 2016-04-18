import {Additions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
  Meteor.publish('additions.index', function () {
    return Additions.find();
  });
}