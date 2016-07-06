import Homepage from '../components/homepage.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
 const {LocalState, Meteor, Collections} = context();
 const toggle = LocalState.get('TOGGLE');
if(Meteor.subscribe('answers').ready()){
	const answers = Collections.Answers.find({}).fetch();
	onData(null, {toggle, answers});
}
};

export const depsMapper = (context, actions) => ({
 showMenu: actions.homepage.showMenu,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(Homepage);