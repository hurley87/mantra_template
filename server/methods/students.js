import {Students} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'students.insert'(students) {
      check(students, Object);
      const hasStudents  = Students.find({'teacherId': students.teacherId}).fetch().length > 0
      if(hasStudents) {
      	Meteor.call('students.update', students);
      } else {
      	Students.insert(students);
      }
    },
    'students.update'(students) {
    	check(students, Object);
    	const studentsCollectionId = Students.find({'teacherId': students.teacherId}).fetch()[0]._id;
    	Students.update({_id: studentsCollectionId}, {
    		$set: {
    			students: students.students
    		}
    	})
    }
  });
}