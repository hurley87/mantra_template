export default{
  setView({LocalState}, view){
    switch(view){
      case "Multi1":
        LocalState.set("MULTIVIEW", "Multi1");
        break;
      case "Multi2":
        LocalState.set("MULTIVIEW", "Multi2");
        break;
      case "Multi3":
        LocalState.set("MULTIVIEW", "Multi3");
        break;
      default:
        break;
    }
  },

  getView({LocalState}){
    if(!LocalState.get("MULTIVIEW")){
      return LocalState.set("MULTIVIEW", "Multi1")
    } else{
      return LocalState.get("MULTIVIEW")
    }
  }
}

