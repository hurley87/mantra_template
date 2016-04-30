export default {
  
  getView({LocalState}) {
  		view = LocalState.get('STORE_VIEW')
    	if(view == undefined){
    		LocalState.set('STORE_VIEW', 'products')
    	}else{
    		return LocalState.get('STORE_VIEW')
    	}
	},

	textbookView({LocalState}){
		LocalState.set('STORE_VIEW', 'textbook')
	}
}