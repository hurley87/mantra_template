import methods from './methods';
import publications from './publications';

publications();
methods();

if(process.env.NODE_ENV === "production") {
	Kadira.connect(Meteor.settings.public.kadira.appId, Meteor.settings.public.kadira.appSecret);	
}