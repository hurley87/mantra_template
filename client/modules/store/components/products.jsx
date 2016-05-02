import React from 'react';



class Products extends React.Component {
  render() {
    return ( 

    <div>

      <div id="projects">
        <div id="wrapper">
          <div id="content">
            <div className="content-wrapper clearfix">
              <div className="row project-list">

                <div className="project" onClick={this.props.textbookView}>
                  <div className="info">
                    <div className="name">Textbook</div>
                    <div className="category">$40</div>
                  </div>
                </div>

                <div className="project">
                  <div className="info">
                    <div className="name">Flashcards</div>
                    <div className="category">$20</div>
                  </div>
                </div>

                <div className="project">
                  <div className="info">
                    <div className="name">Games</div>
                    <div className="category">$20</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default Products;
