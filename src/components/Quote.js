import React from "react";

export default class Quote extends React.Component {
  state = {
    liked: null
  };

  setLiked = () => {
    this.setState({ liked: "yes" });
  };

  setNotLiked = () => {
    this.setState({ liked: "no" });
  };

  render() {
    let style = {};
    if (this.state.liked === "yes") {
      style = { fontWeight: "bold", color: "green" };
    } else if (this.state.liked === "no") {
      style = { textDecoration: "line-through", color: "red" };
    }

    return (
      <div>
        <p style={style}>{this.props.quote}</p>
        <p>
          By: {this.props.author} <button onClick={this.setNotLiked}>:(</button>{" "}
          <button onClick={this.setLiked}>:)</button>
        </p>
      </div>
    );
  }
}
