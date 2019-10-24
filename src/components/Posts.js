import React, { Component } from "react";
import InstaService from "../services/instaService";
import Post from "./Post";
import ErrorMessage from "./Error";

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = posts => {
    this.setState({
      posts,
      error: false
    });
    console.log(this.state);
  };

  onError = () => {
    this.setState({
      error: true
    });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { name, altname, photo, src, alt, descr, id } = item;
      return (
        <Post
          key={id}
          src={src}
          alt={alt}
          name={name}
          descr={descr}
          userphoto={photo}
          altname={altname}
          min
        />
      );
    });
  }

  render() {
    const { posts, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }
    const items = this.renderItems(posts);
    return <div className="left">{items}</div>;
  }
}
