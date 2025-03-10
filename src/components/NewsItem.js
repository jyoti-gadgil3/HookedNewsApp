import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageurl
                ? "https://imgs.hipertextual.com/wp-content/uploads/2024/07/es_disneyplus-breadth_c169_r_5a4.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
