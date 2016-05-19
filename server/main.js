import methods from './methods';
import publications from './publications';

publications();
methods();


// add Kadira for performance monitoring ... only on production
if(process.env.NODE_ENV === "production") {
	Kadira.connect(Meteor.settings.public.kadira.appId, Meteor.settings.public.kadira.appSecret);	
}
