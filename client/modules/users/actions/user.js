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
      Accounts.createUser({
        email: email, 
        password: password
      });
  },

  createProfile({Meteor, LocalState}, name, email, profession, age){
    Meteor.call('create.profile', name, email, profession, age, (err) => {
      
      if(err){
        console.log(err)
      }
      
      FlowRouter.go('/home') 
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null)
  }
}