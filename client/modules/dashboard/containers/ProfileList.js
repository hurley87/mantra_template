import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import ProfileList from '../components/ProfileList.jsx';
import { _ } from 'lodash';

export const composer = ({context, operator}, onData) => {
  const {LocalState, Collections} = context();
  const userId = Meteor.userId();
  if(Meteor.subscribe('profiles.list').ready() && Meteor.subscribe('students.list', userId).ready()){
    const studentIds = Collections.Students.find({}).fetch()[0].students;
  	const profiles = Collections.Profiles.find({ profession: 'student' }, { sort: { name: 1 }}).fetch();
  	onData(null, {profiles, studentIds})
  }
};

export const depsMapper = (context, actions) => ({
  updateProfileList: actions.profilelist.updateProfileList,
  addStudents: actions.profilelist.addStudents,
  createCustomer: actions.profilelist.createCustomer,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProfileList);
