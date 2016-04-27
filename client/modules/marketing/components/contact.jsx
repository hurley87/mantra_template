import React from 'react';
import {Row, Col} from 'react-bootstrap';


const Contact = ( { content = () => null }) => (
  <div id='contact-us'>
    <div id="info">
    <div className="container">
      <div className="row">
        <div className="col-md-8 message">
          <h3>Send us a message</h3>
          <p>
            You can contact us with anything related to React. <br/> Well get in touch with you as soon as possible.
          </p>
          <form role="form" id="contact-form" method="post">
            <div className="form-group">
                <label for="name">Your name</label>
                <input type="text" name="name" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" name="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label for="phone">Phone</label>
                <input type="text" name="phone" className="form-control" id="phone" />
              </div>
              <div className="form-group">
                <label for="message">Your message</label>
                <textarea name="message" className="form-control" id="message" rows="6"></textarea>
              </div>
              <div className="submit">
                <input type="submit" className="button button-small" value="Email us" />
              </div>
          </form>
        </div>
        <div className="col-md-4 contact">
          <div className="address">
            <h3>Our Address</h3>
            <p>
              The Old Road Willington, <br />
              7 Kings Road, <br />
              Southshore, 64890
            </p>
          </div>
          <div className="phone">
            <h3>By Phone</h3>
            <p>
              1-800-346-3344
            </p>
          </div>
          <div className="online-support">
            <strong>Looking for online support?</strong>
            <p>
              Talk to us now with our online chat
            </p>
          </div>
          <div className="social">
            <a href="#" className="fb"><img src="images/social/fb.png" alt="facebook" /></a>
            <a href="#" className="tw"><img src="images/social/tw.png" alt="twitter" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Contact;