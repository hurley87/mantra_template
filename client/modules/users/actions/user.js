export default {
  createStudent({Meteor, LocalState, FlowRouter }, name, email, password, reward) {
    FlowRouter.go('/loading');
    Accounts.createUser({
      username: name,
      password: password
    }, function(err) {
      if(err) {
        console.log(err)
        LocalState.set('CREATE_USER', 'Username already exists!');
        FlowRouter.go('/');
      } else {
        const studentId = Meteor.userId();
        Accounts.createUser({
          email: email,
          password: password
        }, function(err) {
          if(err) {
            console.log(err)
            const studentId = Meteor.users.findOne({ "username" : name })._id;
            Meteor.call('remove.user', studentId, function(err) {
              if(err) {
                console.log(err)
              } else {
                Meteor.logout();
                LocalState.set('CREATE_USER', 'This email is already taken.');
                FlowRouter.go('/');
              }
            });
          } else {
            const student = {
              students: [studentId],
              parentId: Meteor.userId(),
              reward: reward
            }
            Meteor.call('insert.student', student, email, function(err) {
              if(err) {
                LocalState.set('CREATE_USER', 'There was a problem creating your account.');
                FlowRouter.go('/');
              } else {
                FlowRouter.go('/students');
              }
            })
          }
        });
      }
    });
  },  
  createMentor({LocalState, Meteor, FlowRouter}, name, email, password, type ) {
    FlowRouter.go('/loading');
      Accounts.createUser({
       email: email,
       password: password
     }, function(err) {
       if(err) {
         LocalState.set('CREATE_USER', 'There was a problem creating your account.');
         FlowRouter.go('/');
       } else {
         createProfile(name, type);
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
       FlowRouter.go('/');
     } 
     const userId = Meteor.userId();
     if(userId) {
       FlowRouter.go('/profile');
     } else {
       LocalState.set('CREATE_USER', 'Your email is already associated with an account.');
       FlowRouter.go('/');
     } 
  });

}


