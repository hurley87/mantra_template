import Forgot from '../components/forgot.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
 const {LocalState} = context();
 const error = LocalState.get('LOGIN_USER');
 onData(null, {error});
 
 return clearErrors;
};

export const depsMapper = (context, actions) => ({
 login: actions.logins.login,
 forgot: actions.logins.forgot,
 reset_emaiL: actions.logins.reset_email,
 clearErrors: actions.logins.clearErrors,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(Forgot);