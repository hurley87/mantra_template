import ContactForm from '../components/contactForm.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
 const {LocalState} = context();
 const reach = LocalState.set('CONTACT');
 const error = LocalState.get('CONTACT_ERROR');
 onData(null, {reach, error});

 return clearErrors
};

export const depsMapper = (context, actions) => ({
 sendMsg: actions.contact.sendMsg,
 clearErrors: actions.contact.clearErrors,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(ContactForm);