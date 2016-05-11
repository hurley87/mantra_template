import {Emails} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('emails.list', function () {
		return Emails.find();
	});

}