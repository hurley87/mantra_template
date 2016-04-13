import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    
    'create.profile'(name, email, profession, age){
        check(name, String);
        check(email, String);
        check(profession, String);
        check(age, String);
        user = Meteor.userId();
        const profile = {user, name, email, profession, age};
        Profiles.insert(profile);
    }
  });
}