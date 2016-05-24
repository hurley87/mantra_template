export default {
  updateProfileList({LocalState}, searchValue) {
    LocalState.set('SEARCH_VALUE', searchValue);
  },
  addStudents({Meteor, FlowRouter}, students) {
  	const theirStudents = {
  		teacherId: Meteor.userId(),
  		students: students
  	}
  	Meteor.call('students.insert', theirStudents, function(err) {
  		if(err) {
  			console.log(err)
  		} else {
  			FlowRouter.go('/students');
  		}
  	});
  }
}
