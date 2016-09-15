export default {
  create({LocalState, FlowRouter}, challenge, studentId) {
  	FlowRouter.go('/');
  	const userId = Meteor.userId();
    Meteor.call('new.challenge', challenge, userId, studentId, function(err) {
    	if(err) {
    		console.log(err)
    		FlowRouter.go('/new')
    	} else {
    		FlowRouter.go('/challenges')
    	}
    });
  },
  edit({LocalState, FlowRouter}, challenge) {
    Meteor.call('edit.challenge', challenge, function(err) {
      if(err) {
        FlowRouter.go('/edit/' + challenge.challengeId)
      } else {
        FlowRouter.go('/challenges')
      }
    });
  }
}