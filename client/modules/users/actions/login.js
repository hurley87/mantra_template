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

    // user Meteor Accounts package to create the user
    Meteor.loginWithPassword(email, password, function(){
      if(Meteor.userId()){
        FlowRouter.go("/home")
      }else{
        alert("Incorrect user details")
      }
  });

  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null)
  }
}