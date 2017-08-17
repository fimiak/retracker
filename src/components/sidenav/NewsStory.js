import React, { Component } from 'react';
import test from '../../images/testdata/test1.jpg';

class NewsStory extends Component {
    render() {
        return (
            <div className="news-box">
                <div className="news-story">
                    <div className="news-img-container">
                        <a className="article-link" href={this.props.news['web_url']}>
                            <img className="article-image" alt="Article" src={(this.props.news.multimedia.length === 0) ? '' : test}></img>
                        </a>
                        <a className="article-link-headline" href={this.props.news['web_url']}>
                            <span className="headline">{ this.props.news.length >= 0 ? '' : this.props.news['headline'].main}</span>
                        </a>
                    </div>
                    <div className="news-info-container">
                        <div className="article-author-date">
                            <span className="author">{ this.props.news.length >= 0 ? '' : this.props.news.byline.original}</span>
                            <span className="time">{ this.props.news.length >= 0 ? '' : this.props.news['pub_date']}</span>
                        </div>
                        <div className="article-text">
                            <span className="article">{this.props.news['snippet']}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsStory;
