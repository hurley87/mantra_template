export default {
  
    getView({LocalState}) {
    const view = LocalState.get('STORE_VIEW');
    if(view == undefined) {
      LocalState.set('STORE_VIEW', 'products');
    }
    return LocalState.get('STORE_VIEW');
  },

}
