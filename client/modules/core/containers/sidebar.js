import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Sidebar from '../components/sidebar.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const userId = Meteor.userId();
  if(Meteor.subscribe('profiles.single', userId).ready()) {
    const profile = Collections.Profiles.find({"user": userId}).fetch()[0];
    onData(null, {LocalState, profile});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Sidebar);