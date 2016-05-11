import {Emails} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.methods({
    'send.message'(user_name, user_email, user_number, user_message){
        check(user_name, String);
        check(user_email, String);
        check(user_number, String);
        check(user_message, String);
        Emails.insert({
            name: user_name,
            email: user_email,
            phone: user_number,
            message: user_message
      });
    }
  });

}
