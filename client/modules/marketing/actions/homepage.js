export default {
  showMenu({Meteor, LocalState}) {
    const isToggle = LocalState.get('TOGGLE');
    if(isToggle) {
      return LocalState.set('TOGGLE', false)
    } else {
      return LocalState.set('TOGGLE', true)
    }
  }
}