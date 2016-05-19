import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Header from '../components/level.jsx';
import { _ } from 'lodash';

export const composer = ({context, operator}, onData) => {
  const {LocalState, Collections} = context();
  const userId = Meteor.userId();
  if(operator == 'c') {
	if(Meteor.subscribe('counting_answers', userId).ready()){
		const questions = Collections.CountingAnswers.find({'userId': userId }).fetch();
		const right = _.filter(questions, function(question) { return question.answer == question.guess }).length;
		const wrong = questions.length - right;
		onData(null, {right, wrong})
	}
  } else {
	if(Meteor.subscribe('user_questions', operator, userId).ready()){
		const questions = Collections.Questions.find({'operator': operator}).fetch();
		const right = _.filter(questions, function(question) { return question.answer == question.guess }).length;
		const wrong = questions.length - right;
		onData(null, {right, wrong})
	}
  }
};

export const depsMapper = (context, actions) => ({
  showMenu: actions.header.showMenu,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
