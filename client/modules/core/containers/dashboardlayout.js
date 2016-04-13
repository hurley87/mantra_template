import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import DashboardLayout from '../components/DashboardLayout.jsx';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor} = context();
  const user_id = Meteor.userId();
  onData(null, {LocalState, user_id});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DashboardLayout);