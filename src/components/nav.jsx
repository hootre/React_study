import React, { PureComponent } from "react";

class Nav extends PureComponent {
  render() {
    const count = this.props.count;
    return (
      <div>
        <div className="logo"></div>
        <h1>Habit Tracker</h1>
        <h2>{count}</h2>
      </div>
    );
  }
}

export default Nav;
