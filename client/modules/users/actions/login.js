export default {
  login({Meteor, LocalState}, email, password ) {
    // user Meteor Accounts package to create the user
    Meteor.loginWithPassword(email, password, function(){
        if(Meteor.userId()){
          FlowRouter.go("/profile")
        }else{
          return LocalState.set('LOGIN_USER', 'Incorrect login. Check your email and password.')
        }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('LOGIN_USER', null)
  }
}