import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
	Meteor.publish('profiles.list', function () {
		return Profiles.find();
	});

	Meteor.publish('profiles.single', function (token) {
		check (token, String);
		const selector = {user: token};
		return Profiles.find(selector);
	});
}