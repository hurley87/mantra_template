import {Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Email } from 'meteor/email';
import twilio from 'twilio';
import Bitly from 'bitly';
import { HTTP } from 'meteor/http'

export default function () {
  Meteor.methods({
    'new.challenge'(challenge, parentId, studentId){
        check(challenge, Object);
        check(parentId, String)
        check(studentId, String)
        Challenges.insert({
        	parentId: parentId,
            studentId: studentId,
        	challenge: challenge,
            complete: false,
            pending: false,
            attempted: false
        });
    },
    'edit.challenge'(challenge){
        check(challenge, Object);
        Challenges.update({ _id: challenge.challengeId}, {
            $set: {
                'challenge.max': challenge.max,
                'challenge.min': challenge.min,
                'challenge.reward': challenge.reward,
                'challenge.right': challenge.right,
                'challenge.time': challenge.time,
                'challenge.operator': challenge.operator
            }
        })
    },
    'send.challenge'(challenge,to, from, subject, text){
        check(challenge, Object);
        check([to, from, subject, text], [String]);

        Challenges.update({ _id: challenge._id }, { $set: { pending: true } });

        this.unblock();

        Email.send({
          to: to,
          from: from,
          subject: subject,
          html: text
        });
    },
    'text.challenge'(challenge, number, link) {
        check([number, link], [String]);
        check(challenge, Object);

        Challenges.update({ _id: challenge._id }, { $set: { pending: true } });

        this.unblock();

        const client = twilio('ACcd3fa79c0394efc2264afb087ca5b404', '34c464c2285127a00575a4315c4378b5');
        const userNumber = '+1 ' + number;

        const result = HTTP.call("GET", "https://api-ssl.bitly.com/v3/shorten?access_token=f130a6e8b690a800c82b4c051a5bc3e5847fb5cf&format=txt&longUrl=" + encodeURIComponent(link));

        client.sendMessage({
          to: userNumber,
          from: '+1 437-800-0288 ',
          body: "Click the following link to accept the challenge: " + result.content
        });

    }
  });
}