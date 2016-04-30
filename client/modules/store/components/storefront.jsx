import React from 'react';
import Header from '../../dashboard/containers/header.js';
import Products from './products.jsx';
import Textbook from './textbook.jsx';


class StoreFront extends React.Component {
  render() {
    return ( 
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Store' />
        {this.props.getView() == 'products' ? <Products textbookView = {this.props.textbookView} /> : null}
        {this.props.getView() == 'textbook' ? <Textbook /> : null}
        {this.props.getView() == 'flashcards' ? <Flashcards /> : null}
      </div>
     
    
    )
  }
}


export default StoreFront;
