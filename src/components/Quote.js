import React from "react";

export default class Quote extends React.Component {
  like = () => {
    console.log("Quote -> like");
    this.props.setLiked(this.props.id, "yes");
  };

  dislike = () => {
    console.log("Quote -> dislike");
    this.props.setLiked(this.props.id, "no");
  };

  render() {
    let style = {};
    if (this.props.liked === "yes") {
      style = { fontWeight: "bold", color: "green" };
    } else if (this.props.liked === "no") {
      style = { textDecoration: "line-through", color: "red" };
    }

    return (
      <div>
        <p style={style}>{this.props.quote}</p>
        <p>
          By: {this.props.author} <button onClick={this.dislike}>:(</button>{" "}
          <button onClick={this.like}>:)</button>
        </p>
      </div>
    );
  }
}
