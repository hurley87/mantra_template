import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import ProfileList from '../components/ProfileList.jsx';
import { _ } from 'lodash';

export const composer = ({context, operator}, onData) => {
  const {LocalState, Collections} = context();
  const searchValue =  LocalState.get('SEARCH_VALUE')
  if(searchValue == null) { LocalState.set('SEARCH_VALUE', ''); }
  
  if(Meteor.subscribe('searchProfiles', searchValue).ready()){
  	const profiles = Collections.Profiles.find({ profession: 'student' }, { sort: { name: 1 }}).fetch();
  	onData(null, {profiles})
  }
};

export const depsMapper = (context, actions) => ({
  updateProfileList: actions.profilelist.updateProfileList,
  addStudents: actions.profilelist.addStudents,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProfileList);
