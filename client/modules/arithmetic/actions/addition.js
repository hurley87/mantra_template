export default {
  getView({LocalState}) {
    const view = LocalState.get("ADDVIEW");
    if(view == undefined) {
      LocalState.set("ADDVIEW", 'add1');
    }
    return LocalState.get("ADDVIEW");
  },
  setView({LocalState}, view) {
    switch(view) {
      case 'add1':
        LocalState.set("ADDVIEW", 'add1');
        break;
      case 'add2':
        LocalState.set("ADDVIEW", 'add2');
        break;
      case 'add3':
        LocalState.set("ADDVIEW", 'add3');
        break;
      default:
        break;
    }
  } 
}
