import React, { Component } from 'react';
import searchIcon from './../icons/search.svg';
import gridIcon from './../icons/grid.svg';
import homeIcon from './../icons/home.svg';
import mapIcon from './../icons/map.svg';
import sendIcon from './../icons/send.svg';
import './../styles/App.css';

class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      search: !prevState.search
    }));
  }

  render() {
    const openSearch = this.state.search;
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo-wrap">
            <div className="navbar">
              <div className="navbar-group navbar-group-left">
                <button className="button-menu">
                  <a href="/">
                    <img className="open-menu" src={homeIcon} alt="" /> Home
                  </a>
                </button>
                <button className="button-menu">
                  <a href="/list">
                    <img className="open-menu" src={gridIcon} alt="" /> List
                  </a>
                </button>
                <button className="button-menu">
                  <a href="/map">
                    <img className="open-menu" src={mapIcon} alt="" /> Map
                  </a>
                </button>
              </div>
              <div className="navbar-group navbar-group-right">
                <button className="button-menu">
                  <a href="/contact">
                    <img className="open-menu" src={sendIcon} alt="" /> Contact
                  </a>
                </button>
                <input
                  ref={input => {
                    this.searchInput = input;
                  }}
                  className={openSearch ? 'navbar-search' : 'navbar-search navbar-search-hidden'}
                  placeholder="Search"
                />
                <button className="button-menu" onClick={() => this.handleClick()}>
                  <div className="search-menu">
                    <img className="open-menu" src={searchIcon} alt="" /> Search
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
