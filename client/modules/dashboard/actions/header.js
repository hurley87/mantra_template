export default {
  showMenu({LocalState}) {
    const isToggle = LocalState.get('TOGGLE');
    console.log(isToggle);
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
