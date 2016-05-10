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

  getCard(){

    console.log(stripe)

    var handler = StripeCheckout.configure({
        key: Meteor.settings.public.stripe.testPublishableKey,
        image: 'images/bg4.png',
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
      name: 'Demo Site',
      description: '2 widgets',
      currency: "cad",
      amount: 2000
    });

    // if(response.error)
    // Meteor.call('chargeCard', result.id, (err) => {
    // //    if (err) {
    // //      console.log(err)
    // //    }
    // // });
  }

}