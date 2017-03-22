export default {
  create({LocalState, FlowRouter}, challenge, studentId) {
  	FlowRouter.go('/loading');
  	const userId = Meteor.userId();
    LocalState.set('STUDENT_USERNAME', studentId);
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
    FlowRouter.go('/loading');
    Meteor.call('edit.challenge', challenge, function(err) {
      if(err) {
        FlowRouter.go('/edit/' + challenge.challengeId)
      } else {
        FlowRouter.go('/challenges')
      }
    });
  },
  createStudent({LocalState, FlowRouter}, student) {
    FlowRouter.go('/loading');
    Meteor.call('create.student', student, function(err){
      if(err) {
        LocalState.set('CREATE_STUDENT', 'That username is taken. Try another.');
        FlowRouter.go('/students/new')
      } else {
        FlowRouter.go('/challenges')
      }
    });
  },
  setStudent({LocalState}, username) {
    LocalState.set('STUDENT_USERNAME', username);
  },
  sendChallenge({LocalState}, challenge, to, from, subject, text) {
    FlowRouter.go('/loading');
    Meteor.call('send.challenge', challenge, to, from, subject, text, function(err){
      if(err) {
        FlowRouter.go(`/challenges/${challenge._id}`)
      } else {
        FlowRouter.go(`/challenges/${challenge._id}`)
      }
    });
  }, 
  textChallenge({LocalState}, challenge, number, text, userId) {
    FlowRouter.go('/loading');
    Meteor.call('text.challenge', challenge, number, text, userId, function(err){
      if(err) {
        FlowRouter.go(`/challenges/${challenge._id}`)
      } else {
        FlowRouter.go(`/challenges/${challenge._id}`)
      }
    });
  }
}