import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create.profile'(name, profession){
        check(name, String);
        check(profession, String);
        const user = Meteor.userId();
        const profile = {
            user: user, 
            name: name, 
            profession: profession, 
            points: 0,
            wrong: 0,
            right: 0,
            countPoints: 0,
            subPoints: 0,
            addPoints: 0,
            multiPoints: 0,
            divPoints: 0
        };
        const exists = Profiles.findOne({'user': user});
        if(!exists) {
            Profiles.insert(profile);
        }
    }
  });
}