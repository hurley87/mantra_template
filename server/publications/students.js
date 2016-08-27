import {Students} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
	Meteor.publish('student.list', function (email) {
		check(email, String)
		return Students.find({ email: email})
	});
	Meteor.publish('studentId', function(parentId) {
		check(parentId, String);
		return Students.find({ parentId: parentId })
	})
	Meteor.publish('student', function (studentId) {
		check(studentId, String)
		return Meteor.users.find({_id: studentId})
	});
}