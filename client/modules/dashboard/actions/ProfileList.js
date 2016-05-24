export default {
  updateProfileList({LocalState}, searchValue) {
    LocalState.set('SEARCH_VALUE', searchValue);
  },
  addStudents({}, students) {
  	console.log(students)
  }
}
