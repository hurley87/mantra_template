import React from 'react';

const Homepage = ( { content = () => null }) => (
  <div id='home3'>
    <div className="st-container">

      <nav className="nav-menu">
        <h3>Menu</h3>
        <a href="index.html" className="item">
          Home 1 (Static)
        </a>
        <a href="index2.html" className="item">
          Home 2 (Slider)
        </a>
        <a href="features.html" className="item">
          Features
        </a>
        <a href="services.html" className="item">
          Services
        </a>
        <a href="pricing.html" className="item">
          Pricing Charts
        </a>
        <a href="charts.html" className="item">
          Comparison tables
        </a>
        <a href="aboutus.html" className="item">
          About us
        </a>
        <a href="contactus.html" className="item">
          Contact us
        </a>
        <a href="gallery.html" className="item">
          Gallery
        </a>
        <a href="portfolio.html" className="item">
          Portfolio
        </a>
        <a href="blog.html" className="item">
          Blog
        </a>
        <div className="social">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-play"></i>
          </a>
        </div>
      </nav>

      <div className="st-pusher">
        <div className="st-content">

          <header className="navbar navbar-inverse hero" role="banner">
              <div className="container">
                <div className="navbar-header">
                    <a href="index.html" className="navbar-brand">React</a>
                </div>
                <div className="sidebar-toggle">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
          </header>

          <div id="hero">
            <div id="cover-image" className="animated fadeIn">
              <div className="container">
                <h1 className="hero-text animated fadeIn">The best interfaces for your web and mobile apps.</h1>
                <div className="cta animated fadeIn">
                  <a href="signup.html" className="button">Sign up free</a>
                  <a href="#" data-toggle="modal" data-target="#demo" className="demo">Watch a demo</a>
                </div>
                <div className="screenshot animated fadeInUp">
                  <img src="images/ss2.png" className="img-responsive" alt="screenshot" />
                </div>
              </div>
            </div>
          </div>

          <div id="tabs">
            <div className="container">
              <div className="row header">
                <div className="col-md-12">
                  <h3>Accomplish more with React</h3>
                  <p>Choose your favorite formats for your own sites</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 tabs-wrapper">
                  <ul className="nav nav-tabs">
                      <li className="active"><a href="#home" data-toggle="tab">Upstart your development</a></li>
                      <li><a href="#profile" data-toggle="tab">Get ready in half the time</a></li>
                      <li><a href="#messages" data-toggle="tab">Collaborate with everyone</a></li>
                      <li><a href="#settings" data-toggle="tab">Get more done faster</a></li>
                  </ul>

                  <div className="tab-content">
                      <div className="tab-pane fade in active" id="home">
                        <div className="col-md-6 info">
                          <h4>You don't need to have any advanced technical</h4>
                          <p>
                            Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                          </p>
                          <p>
                            You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
                          </p>
                        </div>
                        <div className="col-md-6 image">
                          <img src="images/tabs/pic1.png" className="img-responsive" alt="pic1" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="profile">
                        <div className="col-md-6 image">
                          <img src="images/portfolioitem1.png" className="img-responsive" alt="pic2" />
                        </div>
                        <div className="col-md-6 info">
                          <h4>You don't need to have any advanced technical</h4>
                          <p>
                            Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                          </p>
                        </div>                
                      </div>
                      <div className="tab-pane fade" id="messages">
                        <div className="col-md-6 info">
                          <h4>You don't need to have any advanced technical</h4>
                          <p>
                            Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                          </p>
                          <p>
                            You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
                          </p>
                        </div>
                        <div className="col-md-6 image">
                          <img src="images/tabs/pic2.png" className="img-responsive" alt="pic3" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="settings">
                        <div className="col-md-6 image">
                          <img src="images/tabs/pic1.png" className="img-responsive" alt="pic4" />
                        </div>
                        <div className="col-md-6 info">
                          <h4>You don't need to have any advanced technical</h4>
                          <p>
                            Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="pricing">
            <div className="container">
              <div className="row header">
                <div className="col-md-12">
                  <h3>Free trial. No contract. Cancel when you want.</h3>
                  <p>All plans include a 7-day free trial</p>
                </div>
              </div>
              <div className="row charts">
                <div className="col-md-4">
                  <div className="chart first">
                    <div className="quantity">
                      <span className="dollar">$</span>
                      <span className="price">29</span>
                      <span className="period">/month</span>
                    </div>
                    <div className="plan-name">Freelance</div>
                    <div className="specs">
                      <div className="spec">
                        <span className="variable">5</span>
                        team members
                      </div>
                      <div className="spec">
                        <span className="variable">Digital</span>
                        recurring billing
                      </div>
                      <div className="spec">
                        <span className="variable">Virtual</span>
                        online terminal
                      </div>
                      <div className="spec">
                        <span className="variable">10</span>
                        total products
                      </div>
                      <div className="spec">
                        <span className="variable">1.0%</span>
                        Transaction fee
                      </div>
                    </div>
                    <a className="btn-signup button-clear" href="signup.html">
                      <span>Start free trial</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="chart featured">
                    <div className="popular">Most popular</div>
                    <div className="quantity">
                      <span className="dollar">$</span>
                      <span className="price">79</span>
                      <span className="period">/month</span>
                    </div>
                    <div className="plan-name">Profesional</div>
                    <div className="specs">
                      <div className="spec">
                        <span className="variable">15</span>
                        team members
                      </div>
                      <div className="spec">
                        <span className="variable">Digital</span>
                        recurring billing
                      </div>
                      <div className="spec">
                        <span className="variable">Virtual</span>
                        online terminal
                      </div>
                      <div className="spec">
                        <span className="variable">15</span>
                        total products
                      </div>
                      <div className="spec">
                        <span className="variable">0.5%</span>
                        Transaction fee
                      </div>
                    </div>
                    <a className="btn-signup button-clear" href="signup.html">
                      <span>Start free trial</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="chart last">
                    <div className="quantity">
                      <span className="dollar">$</span>
                      <span className="price">119</span>
                      <span className="period">/month</span>
                    </div>
                    <div className="plan-name">Premium</div>
                    <div className="specs">
                      <div className="spec">
                        <span className="variable">Unlimited</span>
                        team members
                      </div>
                      <div className="spec">
                        <span className="variable">Digital</span>
                        recurring billing
                      </div>
                      <div className="spec">
                        <span className="variable">Virtual</span>
                        online terminal
                      </div>
                      <div className="spec">
                        <span className="variable">25</span>
                        total products
                      </div>
                      <div className="spec">
                        <span className="variable">No</span>
                        Transaction fee
                      </div>
                    </div>
                    <a className="btn-signup button-clear" href="signup.html">
                      <span>Start free trial</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="second-option">
            <div className="container">
              <div className="row">
                <div className="col-md-4 feature">
                  <img src="images/circle-icons/one-color/creditcard.png" alt="creditcard" />
                  <strong>Act locally, work globally</strong>
                  <p>You can work with international customers right out of the box while you can keep staying in your country.</p>
                </div>
                <div className="col-md-4 feature">
                  <img src="images/circle-icons/one-color/dev.png" alt="dev" />
                  <strong>Act globally, work as usual</strong>
                  <p>With some customization you can make this product apply to your branding guidelines and amaze your customers at the same time.</p>
                </div>
                <div className="col-md-4 feature">
                  <img src="images/circle-icons/one-color/globe.png" alt="globe" />
                  <strong>Develop once, run everywhere</strong>
                  <p>We don't impose any design restrictions, you are free to customize it as you see fit and it's easy to use.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 feature">
                  <img src="images/circle-icons/one-color/support.png" alt="support" />
                  <strong>Act globally, work as usual</strong>
                  <p>We're always happy to offer support if you happen to have any doubts about anything, if you need
                    some new stuff contact us.</p>
                </div>
                <div className="col-md-4 feature">
                  <img src="images/circle-icons/one-color/mail.png" alt="mail" />
                  <strong>Develop once, run everywhere</strong>
                  <p>We'll be adding some new stuff to make it even more awesome, if you have any idea please let us know.</p>
                </div>
                <div className="col-md-4 feature">
                  <img src="images/circle-icons/one-color/locked.png" alt="locked" />
                  <strong>Act locally, work globally</strong>
                  <p>This thing will work on any device, it has a very easy to understand documentation and is made with SASS.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="mobile">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 hidden-xs">
                  <img src="images/ss3.png" className="device img-responsive" alt="mobile" />
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="info">
                    <h3>Available in the Appstore</h3>
                    <p>
                      With some customization you can make this product apply to your branding guidelines and amaze your customers at the same time.
                    </p>
                    <a className="app-store" href="#">
                      <img src="images/app-store.png" alt="download on app-store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="grid-first">
            <div className="container">
              <div className="row header">
                <h3>Need an easy way to customize your site?</h3>
                <p>
                  React is perfect for novice developers and experts alike.
                </p>
              </div>
              <div className="row sections">
                <div className="col-md-4">
                  <div className="section">
                    <div className="pic">
                      <img src="images/services2.png" className="img-responsive" alt="services1" />
                    </div>
                    <div className="info">
                      <strong>Awesome mobile app</strong>
                      <p>
                        You can work with international customers right out of the box while staying in your country.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="section">
                    <div className="pic">
                      <img src="images/services4.png" className="img-responsive" alt="services2" />
                    </div>
                    <div className="info">
                      <strong>Awesome mobile app</strong>
                      <p>
                        You can work with international customers right out of the box while staying in your country.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="section">
                    <div className="pic">
                      <img src="images/services3.png" className="img-responsive" alt="services3" />
                    </div>
                    <div className="info">
                      <strong>Awesome mobile app</strong>
                      <p>
                        You can work with international customers right out of the box while staying in your country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;