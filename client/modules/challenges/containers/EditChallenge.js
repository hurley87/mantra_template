import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import EditChallenge from '../components/EditChallenge.jsx';
import { _ } from 'lodash';

export const composer = ({context, challengeId}, onData) => {
  const {LocalState, Collections, FlowRouter} = context();
  if(Meteor.subscribe('challenges.single', challengeId).ready()){
    const challenge = Collections.Challenges.find({ _id: challengeId }).fetch()[0];
    onData(null, {challenge});
  }
};

export const depsMapper = (context, actions) => ({
  edit: actions.challenges.edit,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditChallenge);
