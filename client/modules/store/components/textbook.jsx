import React from 'react';



class Textbook extends React.Component {
  render() {
    return ( 

    <div>
      <div id="projects">
        <div id="wrapper">
          <div id="content">
            <div className="content-wrapper clearfix">
              <div className="row project-list">

                Here is a Textbook
                <button onClick={this.props.getCard.bind(this)}>Buy Textbook</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default Textbook;