export default {
  createStudent({Meteor, LocalState, FlowRouter }, name, email, password) {
    Accounts.createUser({
      username: name,
      password: password
    }, function(err) {
      if(err) {
        console.log(err)
        LocalState.set('CREATE_USER', 'Username already exists!');
        FlowRouter.go('/register');
      } else {
        const userId = Meteor.userId();
        const student = {
          students: [userId],
          email: email
        }
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
                LocalState.set('CREATE_USER', 'This email is already taken.');
                FlowRouter.go('/register');
              }
            });
          } else {
            Meteor.call('insert.student', student, function(err) {
              if(err) {
                console.log(err)
                LocalState.set('CREATE_USER', 'There was a problem creating your account.');
                FlowRouter.go('/register');
              } else {
                FlowRouter.go('/tracker');
              }
            })
          }
        });
      }
    });
  },  
  createMentor({LocalState, Meteor, FlowRouter}, name, email, password, type ) {
      Accounts.createUser({
       email: email,
       password: password
     }, function(err) {
       if(err) {
         LocalState.set('CREATE_USER', 'There was a problem creating your account.');
         FlowRouter.go('/register');
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


