import React, { Component } from "react";

class BlogAuthor extends Component {
  render() {
    return (
      <div className="blog__author-3 d-sm-flex grey-bg mb-90">
        <div className="blog__author-thumb-3 mr-20">
          <img src="https://picsum.photos/50" alt="img not found" />
        </div>
        <div className="blog__author-content">
          <h4>Justin Case</h4>
          <span>Author</span>
          <p>
            So I said blower wellies a blinding shot jolly good argy-bargy he
            nicked it, in my flat don't get shirty with me tosser.
          </p>
        </div>
      </div>
    );
  }
}

export default BlogAuthor;
