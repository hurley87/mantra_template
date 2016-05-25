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
  },
  getCard({LocalState}, amount, name, description, students){
    const theirStudents = {
      teacherId: Meteor.userId(),
      students: students
    }
    const handler = StripeCheckout.configure({
        key: Meteor.settings.public.stripe.testPublishableKey,
        image: 'images/circle-icons/full-color/calculator.png',
        locale: 'auto',
        token: function(token) {
          if(token){
            FlowRouter.go('/loading');
            Meteor.call('chargeCard', token.id, function(error, result){
              if(error){
                console.log(error)
              }else if(result == "succeeded"){
                Meteor.call('students.insert', theirStudents, function(err) {
                  if(err) {
                    console.log(err)
                  } else {
                    FlowRouter.go('/students');
                  }
                });
              }else{
                console.log("sorry")
              }
            });
          }
        }
    });
    handler.open({
      name: name,
      description: description,
      currency: "cad",
      amount: amount
    });
  }
}
