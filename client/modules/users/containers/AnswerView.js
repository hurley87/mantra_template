import AnswerView from '../components/AnswerView.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, answerId}, onData) => {
  const {LocalState, Meteor, Collections, FlowRouter} = context();
  if(Meteor.subscribe('answer.view', answerId).ready()) {
  	const answer = Collections.Answers.find({ "_id": answerId}).fetch();
    onData(null, {LocalState, Meteor, FlowRouter, answer});
  }
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
 clearErrors: actions.logins.clearErrors,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(AnswerView);