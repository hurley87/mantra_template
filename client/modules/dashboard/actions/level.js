export default {
  showMenu({LocalState}) {
    const isToggle = LocalState.get('TOGGLE');
    if(isToggle) {
      return LocalState.set('TOGGLE', false)
    } else {
      return LocalState.set('TOGGLE', true)
    }
  },
  menuStyle({LocalState}) {
    return LocalState.get('MENU');
  }
}
