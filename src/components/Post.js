import React, { Component } from "react";
import User from "./User";

export default class Post extends Component {
  render() {
    const { name, altname, userphoto, src, alt, descr, min } = this.props;
    return (
      <div className="post">
        <User src={userphoto} alt={altname} name={altname} min={min} />
        <img src={src} alt={alt}></img>
        <div className="post__name">{name}</div>
        <div className="post__descr">{descr}</div>
      </div>
    );
  }
}
