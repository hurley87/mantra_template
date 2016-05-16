import React from 'react';



class Loading extends React.Component {
  render() {
    return ( 
    <div id="coming-soon">
      <div className="container">
          <div className="row info">
              <div className="col-md-12">
                  <h1><a href="/profile">Pttrns</a></h1>

              </div>
          </div>
          <div className="row social">
              <div className="col-md-12">
                  <div className="loader">Loading...</div>
              </div>
          </div>
      </div>
    </div>
    )
  }
}


export default Loading;