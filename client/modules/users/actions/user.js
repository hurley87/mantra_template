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
            LocalState.set('CREATE_USER', 'There was a problem creating your account.');
            FlowRouter.go('/register');
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
        LocalState.set('CREATE_USER', 'There was a problem creating your account.');
        FlowRouter.go('/signup');
      } else {
        Meteor.call('insert.student', student, function(err) {
          if(err) {
            LocalState.set('CREATE_USER', 'There was a problem creating your account.');
            FlowRouter.go('/signup');
          } else {
            FlowRouter.go('/tracker');
          }
        })
        
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER', null)
  }
}
