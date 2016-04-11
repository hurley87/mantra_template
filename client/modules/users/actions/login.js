export default {
  login({Meteor, LocalState }, email, password ) {
    // handle errors if they exist
    if(!email) {
      return LocalState.set('LOGIN_USER', 'Email is required.');
    }
    if(!password) {
      return LocalState.set('LOGIN_USER', 'Password is required.');
    }
    // set errors to null if no error exists
    LocalState.set('LOGIN_USER', null);


    console.log(email)
    console.log(password)
    
    // user Meteor Accounts package to create the user
    Meteor.loginWithPassword(email, password);

    //redirect back to home
    FlowRouter.go('/home');
  },
  
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null)
  }
}