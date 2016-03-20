export default {
  create({Meteor, LocalState }, email, password ) {
    // handle errors if they exist
    if(!email) {
      return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
    }
    if(!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }
    // set errors to null if no error exists
    LocalState.set('CREATE_USER_ERROR', null);

    // user Meteor Accounts package to create the user
    Accounts.createUser({email, password});

    //redirect back to home
    FlowRouter.go('/');
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null)
  },
  coolGuy({LocalState}) {
    return 'sweet';
  }
}