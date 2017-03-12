import UpdateEmail from '../components/UpdateEmail.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
 const {LocalState} = context();
 const error = LocalState.get('LOGIN_USER');
 onData(null, {error});
 
 return clearErrors;
};

export const depsMapper = (context, actions) => ({
 updateEmail: actions.logins.updateEmail,
 clearErrors: actions.logins.clearErrors,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(UpdateEmail);