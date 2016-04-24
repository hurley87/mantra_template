import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'update.profile'(id, user_name, user_email, user_profession, user_age){
        check(id, String);
        check(user_name, String);
        check(user_email, String);
        check(user_profession, String);
        check(user_age, String);
        Profiles.update(id, {
          $set: {
            name: user_name,
            email: user_email,
            profession: user_profession,
            age: user_age,
            score: 0
          }
      });
    }
    
  });
}