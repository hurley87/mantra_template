import {Students} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
	Meteor.publish('students.list', function (teacherId) {
		check (teacherId, String);
		return Students.find({ 'teacherId': teacherId});
	});
}