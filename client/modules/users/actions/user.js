export default {
  create({Meteor, LocalState }, email, password ) {
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
    if(Meteor.userId()){
      Accounts.createUser({
        email: email, 
        password: password
      });
    } else {
      return LocalState.set('CREATE_USER', 'Incorrect login details');
    }
    //redirect back to home
    FlowRouter.go('/home');
  },
  
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null)
  }
}