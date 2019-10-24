import React from "react";

export default class Quote extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.quote}</p>
        <p>By: {this.props.author}</p>
      </div>
    );
  }
}
