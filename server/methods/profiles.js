import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    
    'create.profile'(name, age){
        check(name, String);
        check(age, String);
        user = Meteor.userId();
        const profile = {user, name, age};
        Profiles.insert(profile);
    },

    'update.profile'(id, user_name, user_age){
        check(id, String);
        check(user_name, String);
        check(user_age, String);
        Profiles.update(id, {
          $set: {
            name: user_name,
            age: user_age
          }
      });
    }
    
  });
}