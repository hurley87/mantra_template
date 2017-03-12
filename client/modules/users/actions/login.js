export default {
  login({Meteor, LocalState}, email, password ) {
    FlowRouter.go('/loading');
    Meteor.loginWithPassword(email, password, function(error){
      if(error) {
        LocalState.set('LOGIN_USER', 'Incorrect login. Check your email and password.')
        FlowRouter.go("/login")
      } else {
        if(Meteor.userId()){
          FlowRouter.go("/challenges")
        }else{
          LocalState.set('LOGIN_USER', 'Incorrect login. Check your email and password.')
          FlowRouter.go("/login")
        }
      }
    });
  },
  studentlogin({Meteor, LocalState}, username, password) {
    FlowRouter.go('/loading');
    Meteor.loginWithPassword(username, password, function(error){
        if(error) {
          LocalState.set('LOGIN_USER', 'Incorrect login. Check your username and password.')
          FlowRouter.go("/login")
        } else {
          if(Meteor.userId()){
            FlowRouter.go("/challenges")
          }else{
            LocalState.set('LOGIN_USER', 'Incorrect login. Check your username and password.')
            FlowRouter.go("/login")
          }
        }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('LOGIN_USER', null)
  },
  updateEmail({Meteor, LocalState}, email) {
    FlowRouter.go('/loading');
    const userId = Meteor.userId()
    Meteor.call('updateEmail', email, userId, function(err){
      if(err) {
        LocalState.set('LOGIN_USER', 'Email already taken')
        FlowRouter.go("/update")
      } else {
        FlowRouter.go("/challenges")
      }
    });
  }
}