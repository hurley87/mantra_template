import Homepage from '../components/Homepage.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
 const {LocalState} = context();
 const toggle = LocalState.get('TOGGLE');

 onData(null, {toggle});
 
 // clearErrors when unmounting the component
 return null;
};

export const depsMapper = (context, actions) => ({
 toggleMenu: actions.homepage.toggleMenu,
 showMenu: actions.homepage.showMenu,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(Homepage);