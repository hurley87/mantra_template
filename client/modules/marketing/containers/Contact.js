import ContactForm from '../components/contactForm.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
 const {LocalState} = context();
 const reach = LocalState.set('CONTACT');
 onData(null, {reach});
};

export const depsMapper = (context, actions) => ({
 sendMsg: actions.contact.sendMsg,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(ContactForm);