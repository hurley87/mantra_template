export default {
  create({Meteor, LocalState },name, email, password, profession, age) {
    // handle errors if they exist
    if(!email) {
      return LocalState.set('CREATE_USER', 'Email is required.');
    }
    if(!password) {
      return LocalState.set('CREATE_USER', 'Password is required.');
    }
    // set errors to null if no error exists
    LocalState.set('CREATE_USER', null);
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
    console.log('hey')
    return LocalState.set('SAVING_ERROR', null)
  }
}