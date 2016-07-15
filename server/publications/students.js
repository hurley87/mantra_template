import {Students} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
	Meteor.publish('student.list', function (email) {
		check(email, String)
		return Students.find({ email: email})
	});
}