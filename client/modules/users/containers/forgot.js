import Forgot from '../components/forgot.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
 const {LocalState} = context();
 const error = LocalState.get('FORGOT_USER');
 onData(null, {error});
 
 return clearErrors;
};

export const depsMapper = (context, actions) => ({
 forgot: actions.forgot.forgot,
 clearErrors: actions.forgot.clearErrors,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(Forgot);