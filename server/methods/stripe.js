import {Customers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import stripe from 'stripe';

export default function () {

  Meteor.methods({
    'chargeCard'(myToken){
      	check(myToken, String);
    	  var key = Meteor.settings.private.stripe.testSecretKey;
        var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
        var stripeCreateChargeSync = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges)

        var result = stripeCreateChargeSync({
        	amount: 4000,
    			currency: "cad",
   			  source: myToken, 
    			description: "Pttrns Textbook"
      	})

        return result.status;
    },
    'createSubscriber'(token, userId) {
      check(token, String);
      check(userId, String);

      var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
      var stripeCustomerCreate = Meteor.wrapAsync(Stripe.customers.create, Stripe.customers);

      var customer = stripeCustomerCreate({
        description: 'Customer for test@example.com',
        source: token,
        plan: "student1"
      });

      Meteor.call('createCustomer', customer, userId);

      return 'succeeded'

    },
    'createCustomer'(customer, userId) {
      check(customer, Object);
      check(userId, String);
      let customerDoc = customer;
      customerDoc['userId'] = userId;
      Customers.insert(customerDoc);
    }
    
  });

}