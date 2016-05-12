export default {
  create({Meteor, LocalState },name, email, password, profession, age) {
    // user Meteor Accounts package to create the user
    Accounts.createUser({
      email: email, 
      password: password
    }, function(err) {
      Meteor.call('create.profile', name, email, profession, age, (err) => {
        if(err){
          console.log(err)
        }
        const userId = Meteor.userId();
        if(userId) {
          FlowRouter.go('/profile');
        } else {
          LocalState.set('CREATE_USER', 'Your email is already associated with an account.');
          FlowRouter.go('/register');
        } 
      });
    });
  },  
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER', null)
  }
}