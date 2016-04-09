export default {
  setView({LocalState}, view) {
    switch(view){
      case 'Sub1':
        LocalState.set("SUBVIEW", "Sub1");
        break;
      case 'Sub2':
        LocalState.set("SUBVIEW", "Sub2");
        break;
      case 'Sub3':
        LocalState.set("SUBVIEW", "Sub3");
        break;
      default:
        break;
    }
  },
  getView({LocalState}){
    if(!LocalState.get("SUBVIEW")){
      LocalState.set("SUBVIEW", "Sub1")
    }else{
      return LocalState.get("SUBVIEW")
    }
  }
}

