export default {
	sendMsg({Meteor, LocalState, FlowRouter}, name, email, phone, message) {
    	Meteor.call('send.message', name, email, phone, message, function(err) {
    		if(err) {
    			console.log(err)
    			LocalState.set('CONTACT_ERROR', 'There was an error sending your message.');
    		} else {
    			LocalState.set('CONTACT_ERROR', 'Message sent!');
    		}
    	});
	},
	clearErrors({LocalState}) {
	    return LocalState.set('CONTACT_ERROR', null);
	}
}