import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
	Meteor.publish('profiles.list', function () {
		return Profiles.find();
	});

	Meteor.publish('profiles.single', function () {
		check(user, String);
		const selector = {user: Meteor.userId()}
		return Profiles.find(selector);
	});
}