import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="inner-footer">
          <div className="footer-column">
            <h3>Tools</h3>
            <a href="https://facebook.github.io/react/">ReactJS</a>
            <a href="https://www.cia.gov/library/publications/the-world-factbook/">World Factbook</a>
            <a href="https://developer.nytimes.com/">NYTimes API</a>
            <a href="https://developers.google.com/maps/">Google Maps</a>
          </div>
          <div className="footer-column footer-middle">
            <h3>Links</h3>
            <a href="/">Home Page</a>
            <a href="/contact">Contact Us</a>
            <a href="http://www.wikipedia.org">Wikipedia</a>
          </div>
          <div className="footer-column footer-last">
            <h3>Newsletter</h3>
            <div className="footer-input">
              <input className="input-email" placeholder="Email"></input>
              <button className="button-submit">Submit</button>
            </div>
            <p>PRESIDENTPRIME is a public tracker of world leaders<br /> Data sourced from public News APIs, NGOs, and Wikipedia<br/>Images not property of PRESIDENTPRIME. Sourced by Google<br /> Copyright 2017</p>
          </div>
      </div>
    )
  }
}

export default Footer;
