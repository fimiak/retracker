import React, { Component } from 'react';
import ElectionCalWrap from '.././home/elections/ElectionCalWrap';
import Featured from '.././home/featured/Featured';
import Summits from '.././home/summits/Summits';
import Title from '.././home/title/Title';

class Home extends Component {
  state = {
    summits: [
      {
        img: 'summit.jpg',
        date: '6/8/18',
        name: 'G7 Summit',
        location: 'La Malbaie, Canada'
      },
      {
        img: 'loading.jpg',
        date: '11/31/18',
        name: 'G20 Summit',
        location: 'Buenos Aires, Argentina'
      }
    ]
  };

  componentDidMount() {
    /* fetch('https://fast-journey-76120.herokuapp.com/api/news')
      .then(res => res.json())
      .then(news => this.setState({ news }));
    */
    /*  fetch('https://fast-journey-76120.herokuapp.com/api/summits')
      .then(res => res.json())
      .then(summits => this.setState({ summits })); */
  }

  render() {
    if (!this.state.summits) {
      return (
        <div className="home">
          <div className="home__content">
            <div className="home-featured">
              <Title title="IONSTATE:" subtitle="The biggest daily news and topics concerning today's world leaders" />
              <ElectionCalWrap {...this.props} {...this.state} />
              <Summits {...this.props} {...this.state} />
              <p className="item-header">Loading featured news...</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="home">
        <div className="home__content">
          <div className="home-featured">
            <Title title="IONSTATE:" subtitle="The biggest daily news and topics concerning today's world leaders" />
            <ElectionCalWrap {...this.props} {...this.state} />
            <Summits {...this.props} {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

//             <Featured startSlice={0} {...this.props} {...this.state} />
