import stripe from 'stripe';

export default {
  
  getView({LocalState}) {
  		view = LocalState.get('STORE_VIEW')
    	if(view == undefined){
    		LocalState.set('STORE_VIEW', 'textbook')
    	}else{
    		return LocalState.get('STORE_VIEW')
    	}
	},

	textbookView({LocalState}){
		LocalState.set('STORE_VIEW', 'textbook')
	},

  getCard({LocalState}, amount, name, description){

    var handler = StripeCheckout.configure({
        key: Meteor.settings.public.stripe.testPublishableKey,
        image: 'images/circle-icons/full-color/calculator.png',
        locale: 'auto',
        token: function(token) {
          if(token){
            FlowRouter.go('/loading');
            Meteor.call('chargeCard', token.id, function(error, result){
              if(error){
                console.log(error)
              }else if(result == "succeeded"){
                FlowRouter.go('/thank_you')
              }else{
                console.log("sorry")
              }
            });
          }
        }
    });

    handler.open({
      name: name,
      description: description,
      currency: "cad",
      amount: amount
    });
  }

}