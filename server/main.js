import methods from './methods';
import publications from './publications';

publications();
methods();

Meteor.startup(function(){
  process.env.MAIL_URL="smtp://dhurls99:Hockey2399@smtp.gmail.com:587/";
});