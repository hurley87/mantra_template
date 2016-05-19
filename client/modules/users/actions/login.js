export default {
  login({Meteor, LocalState}, email, password ) {
    Meteor.loginWithPassword(email, password, function(error){
      if(error) {
        LocalState.set('LOGIN_USER', 'Incorrect login. Check your email and password.')
      } else {
        if(Meteor.userId()){
          FlowRouter.go("/profile")
        }else{
          LocalState.set('LOGIN_USER', 'Incorrect login. Check your email and password.')
        }
      }
    });
  },
  studentlogin({Meteor, LocalState}, username, password) {
    Meteor.loginWithPassword(username, password, function(error){
        if(error) {
          LocalState.set('LOGIN_USER', 'Incorrect login. Check your username and password.')
        } else {
          if(Meteor.userId()){
            FlowRouter.go("/profile")
          }else{
            LocalState.set('LOGIN_USER', 'Incorrect login. Check your username and password.')
          }
        }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('LOGIN_USER', null)
  }
}