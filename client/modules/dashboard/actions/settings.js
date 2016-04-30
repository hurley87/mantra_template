export default {
  
  showView({LocalState}, view) {
    LocalState.set('SETTINGSVIEW', view)
  },
  
  getView({LocalState}) {
    const view = LocalState.get('SETTINGSVIEW');
    if(view == undefined) {
      LocalState.set('SETTINGSVIEW', 'profile');
    }
    return LocalState.get('SETTINGSVIEW');
  },

  updateProfile({Metoer, LocalState}, id, user_name, user_email, user_profession, user_age){
      Meteor.call('update.profile', id, user_name, user_email, user_profession, user_age, (err) => {
        if(err){
          console.log(err)
        }
      });
  },

  updatePassword({Meteor, LocalState}, first, second){
    Accounts.changePassword(first, second);
  },

  getToken({Meteor, LocalState}, card, cvc, month, year){
    var cardDetails = {
      "number": card,
      "cvc": cvc,
      "exp_month": month,
      "exp_year": year
    }
    Stripe.createToken(cardDetails, function(status, response){
      if(response.error){
        alert(response.error)
      }else{
        console.log(response)
      }
    })
  }
  
}

