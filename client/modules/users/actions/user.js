import Amplitude from 'amplitude';

export default {
  create({Meteor, LocalState },name, email, password, profession, age) {
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
    }, function(err) {

      var amplitude = new Amplitude(Meteor.settings.public.amplitude, { email: email });
      var data = {
        event_type: 'sign up',
        event_properties: {
          event1: 'prop1'
        },
        user_properties: {
          userProp: 'prop1'
        }
      }
      amplitude.track(data);

      Meteor.call('create.profile', name, email, profession, age, (err) => {
        if(err){
          console.log(err)
        }
        FlowRouter.go('/profile')
      });
    });
  },  
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null)
  }
}