import NewStudent from '../components/NewStudent.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
 const {LocalState} = context();
 const error = LocalState.get('CREATE_USER');
 onData(null, {error});
 
 return clearErrors;
};

export const depsMapper = (context, actions) => ({
 createStudent: actions.users.createStudent,
 clearErrors: actions.users.clearErrors,
 createMentor: actions.users.createMentor,
 context: () => context
});

export default composeAll(
 composeWithTracker(composer),
 useDeps(depsMapper)
)(NewStudent);