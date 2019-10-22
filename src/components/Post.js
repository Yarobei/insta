import React, { Component } from "react";
import User from "./User";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
          alt="man"
          name="Scott"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">some account</div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nihil!
          Ab, harum eius fugiat recusandae sunt, tempora aut optio voluptas
          omnis id officiis nulla dicta quas facilis commodi ad laboriosam.
        </div>
      </div>
    );
  }
}
