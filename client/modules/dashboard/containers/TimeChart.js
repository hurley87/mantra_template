import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TimeChart from '../components/TimeChart.jsx';
import { _ } from 'lodash';

export const composer = ({context}, onData) => {
  const {LocalState, Collections} = context();
  const userId = Meteor.userId();
	if(Meteor.subscribe('counting_answers', userId).ready() && Meteor.subscribe('all_user_questions', userId).ready()){
		const counting_questions = Collections.CountingAnswers.find({'userId': userId }).fetch();
		const questions = Collections.Questions.find({}).fetch();
		onData(null, {counting_questions, questions})
	}
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TimeChart);
