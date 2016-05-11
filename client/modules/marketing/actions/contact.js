export default {
  
	sendMsg({Meteor, LocalState}, name, email, phone, message) {
    	Meteor.call('send.message', name, email, phone, message)
	}
	
}