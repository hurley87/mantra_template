import React from 'react';



class Textbook extends React.Component {
  render() {
    return ( 


      <div id="coming-soon">
        <div className="container">
          <div className="row info">
            <div className="col-md-12">
                <h1><a href="/profile">Pttrns Textbook</a></h1>
                <h3>A Guide for Parents</h3>
                <button onClick={this.props.getCard.bind(this)}>Buy Textbook</button>
            </div>
          </div>
        </div>
      </div>



    )
  }
}


export default Textbook;