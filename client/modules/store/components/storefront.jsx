import React from 'react';
import Header from '../../dashboard/containers/header.js';
import Products from './products.jsx';


class StoreFront extends React.Component {
  render() {
    return ( 
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Store'/>
          <div id='content'>
        <Products />
        </div>
      </div>
     
    
    )
  }
}


export default StoreFront;