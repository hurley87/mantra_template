import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import StudentView from '../components/StudentView.jsx';
import { _ } from 'lodash';

export const composer = ({context, userId}, onData) => {
  const {LocalState, Collections} = context();
  console.log(userId) // subsribe to a student's profile and their questions using their Id
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StudentView);
