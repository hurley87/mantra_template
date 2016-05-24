export default {
  createStudent({Meteor, LocalState },name, password, type) {
    Accounts.createUser({
      username: name,
      password: password
    }, function(err) {
      if(err) {
        console.log(err)
        LocalState.set('CREATE_USER', 'Username already exists!');
        FlowRouter.go('/register');
      } else {
        Meteor.call('create.profile', name, type, (err) => {
          if(err){
            console.log(err)
            LocalState.set('CREATE_USER', 'There was a problem creating your account.');
            FlowRouter.go('/register');
          } 
          const userId = Meteor.userId();
          if(userId) {
            FlowRouter.go('/profile');
          } else {
            LocalState.set('CREATE_USER', 'Your email is already associated with an account.');
            FlowRouter.go('/register');
          } 
        });
      }
    });
  },  
  createMentor({LocalState, Meteor}, name, email, password, type ) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      if(err) {
        LocalState.set('CREATE_USER', 'There was a problem creating your account.');
        FlowRouter.go('/register');
      } else {
        Meteor.call('create.profile', name, type, (err) => {
          if(err){
            console.log(err)
            LocalState.set('CREATE_USER', 'There was a problem creating your account.');
            FlowRouter.go('/register');
          } 
          const userId = Meteor.userId();
          if(userId) {
            FlowRouter.go('/students');
          } else {
            LocalState.set('CREATE_USER', 'Your email is already associated with an account.');
            FlowRouter.go('/register');
          } 
        });
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER', null)
  }
}

function createProfile(name, type) {
  Meteor.call('create.profile', name, type, (err) => {
    if(err){
      console.log(err)
      LocalState.set('CREATE_USER', 'There was a problem creating your account.');
      FlowRouter.go('/register');
    } 
    const userId = Meteor.userId();
    if(userId) {
      FlowRouter.go('/profile');
    } else {
      LocalState.set('CREATE_USER', 'Your email is already associated with an account.');
      FlowRouter.go('/register');
    } 
  });
}