import React, { Component } from "react";
import Post from "./Post";

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post
          src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
          alt="first"
        />
        <Post
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
          alt="second"
        />
      </div>
    );
  }
}
