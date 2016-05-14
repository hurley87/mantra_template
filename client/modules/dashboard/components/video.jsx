import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Video extends React.Component {
  render() {
    return (
      <div>
  
  <div className="wrapper">
    
    <section className="details">
      <h1>Counting Strategy Video</h1>
    </section>

    <section className="hero">

          <div className="wistia_responsive_padding">

              <div className="wistia_responsive_wrapper">
                  <div className="wistia_embed wistia_async_4swzw9d6yo videoFoam=true">&nbsp;
                  </div>
              </div>
          </div>

    </section>

    <section className="details">
      <p className="vid-details">A just UNREAL description of the strategy is here.</p>
      <p className="vid-details">More mind-blowing material about our strategy is here.</p>
    </section>

  </div>

</div>
    )
  }
}

export default Video;