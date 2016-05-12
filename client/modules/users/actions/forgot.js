export default {
  forgot({Meteor, LocalState}, user_email){
    var options = {};
    options.email = user_email;
    
    Accounts.forgotPassword(options, function(err){  
      if (err) { 
        LocalState.set('FORGOT_USER', 'This email is not associated with an account.')
      }else{
        LocalState.set('FORGOT_USER', 'Check your indox!')
      } 
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('FORGOT_USER', null)
  }
}