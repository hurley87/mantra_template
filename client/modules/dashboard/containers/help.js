import Help from '../components/help.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
 const {LocalState} = context();
 const toggle = LocalState.get('TOGGLE');
 onData(null, {toggle});
};

export const depsMapper = (context, actions) => ({
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(Help);