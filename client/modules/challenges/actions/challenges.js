export default {
  create({LocalState, FlowRouter}, challenge) {
  	FlowRouter.go('/');
  	const userId = Meteor.userId();
    Meteor.call('new.challenge', challenge, userId, function(err) {
    	if(err) {
    		console.log(err)
    		FlowRouter.go('/new')
    	} else {
    		FlowRouter.go('/challenges')
    	}
    });
  }
}