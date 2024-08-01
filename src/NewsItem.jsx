import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(){
        super();
    }

  render() {
    let {title , description, urlToImage , url} = this.props;
    return (
        <div className="card">
            <div className='card-img-top-div'>
            <img className="card-img-top" 
            src={urlToImage  ? urlToImage : 
              "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/Mt-Gox-customers-will-get-bitcoin-back.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" }
             alt="Card image cap"/>
            </div>
        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url}  className="btn">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
