import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  render() {
    return (
      <div className="right">
        <User
          src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
          alt="man"
          name="Scott"
        />
        <div className="users__block">
          <User
            src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt="man"
            name="Scott"
            min
          />
          <User
            src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt="man"
            name="Scott"
            min
          />
          <User
            src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt="man"
            name="Scott"
            min
          />
          <User
            src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
            alt="man"
            name="Scott"
            min
          />
        </div>
      </div>
    );
  }
}
