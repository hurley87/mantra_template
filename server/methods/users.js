import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    
    'create.profile'(name, age, email, profession){
        check(name, String);
        check(age, String);
        check(email, String);
        check(profession, String);
        user = Meteor.userId();
        const profile = {user, name, age, email, profession};
        Profiles.insert(profile);
    }
  });
}