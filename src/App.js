import React, { Component } from 'react';
//import { createStore } from 'redux';
//import Counter from './components/components';
//import counter from './components/api/reducers';
import axios from 'axios';
import NavLink from './components/NavLink';
import logo from './Logo2.svg';
import data from './data/data';
//import SidenavList from './components/SidenavList';
import Sidenav from './components/Sidenav';
import './App.css';

let usa = data.data[0];
let uk = data.data[1];
let mexico = data.data[2];

class App extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      data: data,
      selection: usa,
      loading: true
    };
  }

  componentDidMount() {
      this.performSearch();
  }

  performSearch = () => {
  axios.get('https://newsapi.org/v1/articles?source=bloomberg&apiKey=3990f9aab5b046b5aeb3e089ca3e37dc')
    .then(response => {
      this.setState({
        news: response.data
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

  setNation = (nation) => {
    this.setState({
      selection: nation
    })
}

  render() {
    console.log(this.state.news.source);
    return (
      <div className="App">
        <div className="App-header">
          <div className="inner-header">
            <div className="logo-wrap">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="nav-sidenav">
              <ul>
                <li><NavLink to="/sidenav/datasheets/usa" onClick={() => this.setNation(usa)}><img src="https://qph.ec.quoracdn.net/main-thumb-t-28717-50-qylrwevlxgcnoddancubpsnfajpuqoba.jpeg" alt="Donald Trump" /><div className="scopy" id="scopy">{usa.leader}</div></NavLink></li>
                <li><NavLink to="/sidenav/news"><img src="https://d2m2lkhawsaq1u.cloudfront.net/uploads/trial/size50by50/Angela_Merkel_(August_2012)_cropped_1393309849.jpg" alt="Angela Merkel" /><div className="copy">Angela Merkel</div></NavLink></li>
                <li><NavLink to="/sidenav/maps"><img src="https://i2.wp.com/i.forbesimg.com/media/lists/people/vladimir-putin_50x50.jpg" alt="Vladimir Putin" /><div className="copy">Vladimir Putin</div></NavLink></li>
                <li><NavLink to="/sidenav/schedule"><img src="https://qph.ec.quoracdn.net/main-thumb-2395782-50-injemmlgfuvhqtrreyfvjrtqsrgkcomp.jpeg" alt="Justin Trudeau" /><div className="copy">Justin Trudeau</div></NavLink></li>
                <li><NavLink to="/sidenav/datasheets/mexico" onClick={() => this.setNation(mexico)}><img src="http://tmj.mx/wp-content/uploads/2017/01/Captura-de-pantalla-2017-01-26-a-las-1.18.33-p.m.-50x50.png" alt="Pena Nieto" /><div className="copy">Pena Nieto</div></NavLink></li>
                <li><NavLink to="/sidenav/datasheets/uk" onClick={() => this.setNation(uk)}><img src="https://www.thejc.com/image/policy:1.429392:1481817425/20160713172905!Theresa_May_UK_Home_Office_(cropped).jpg?f=1x1&w=50&$p$f$w=8a40945" alt="Theresa May" /><div className="copy">{uk.leader} Theresa May</div></NavLink></li>
              </ul>
              <NavLink to="/" className="about" activeClassName="active">More Info</NavLink>
              <button>Button</button>
            </div>
          </div>
        </div>
        <div className="App-intro">
          <Sidenav nation={this.state.selection.leader} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
