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
  
  createProfile({Meteor, LocalState}, name, email, profession, age){
    Meteor.call('create.profile', name, email, profession, age, (err) => {
      if(err){
        console.log(err)
      }
    });
  },

  updateProfile({Metoer, LocalState}, id, user_name, user_email, user_profession, user_age){
      Meteor.call('update.profile', id, user_name, user_email, user_profession, user_age, (err) => {
        if(err){
          console.log(err)
        }
      });
  }
}
