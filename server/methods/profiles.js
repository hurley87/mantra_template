import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create.profile'(name, age){
    	check(name, String);
      check(age, String);
    	const profile = {name, age};
    	Profiles.insert(profile);
    }
  });
}