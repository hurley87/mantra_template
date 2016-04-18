import {Additions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.startup(function () {
    Additions.remove({});
    Additions.insert({
      min: '0',
      max: '5'
    });
    Additions.insert({
      min: '2',
      max: '7'
    });
    Additions.insert({
      min: '3',
      max: '8'
    });
    Additions.insert({
      min: '4',
      max: '9'
    });
    Additions.insert({
      min: '5',
      max: '10'
    });
  });
}