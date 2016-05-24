import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import MyStudents from '../components/MyStudents.jsx';
import { _ } from 'lodash';

export const composer = ({context, operator}, onData) => {
  const {LocalState, Collections} = context();
    const userId = Meteor.userId();
  if(Meteor.subscribe('students.list', userId).ready() && Meteor.subscribe('profiles.list').ready()) {
    const studentIds = Collections.Students.find({}).fetch()[0].students;
    const profiles = Collections.Profiles.find({ "user": { $in: studentIds }}).fetch();
    onData(null, {profiles});
  } else {
    onData(null, {});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MyStudents);
