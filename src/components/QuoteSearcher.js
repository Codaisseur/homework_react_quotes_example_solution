import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    fetching: false,
    quotes: []
  };

  componentDidMount() {
    // in order to show the "loading..." text
    this.setState({ fetching: true });
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      .then(data => {
        console.log("data arrived!", data);
        this.setState({
          fetching: false,
          quotes: data.results.map(quote => {
            return {
              ...quote,
              liked: null
            };
          })
        });
      });
  }

  setLiked = (id, liked) => {
    console.log("QuoteSearcher -> setLiked", id, liked);

    const updatedQuotes = this.state.quotes.map(quote => {
      if (quote._id === id) {
        return {
          ...quote,
          liked: liked
        };
      } else {
        return quote;
      }
    });

    console.log("QuoteSearcher -> updatedQuotes", updatedQuotes);

    this.setState({
      quotes: updatedQuotes
    });
  };

  render() {
    const numLiked = this.state.quotes.filter(quote => {
      return quote.liked === "yes";
    }).length;

    const numDisliked = this.state.quotes.filter(quote => {
      return quote.liked === "no";
    }).length;

    return (
      <div>
        <h1>Quotes</h1>
        <p>
          <strong>
            Liked: {numLiked} / Disliked: {numDisliked}
          </strong>
        </p>
        {this.state.fetching ? (
          <p>Loading...</p>
        ) : (
          <div>
            {this.state.quotes.map(quote => {
              // console.log("quote?", quote);
              return (
                <Quote
                  id={quote._id}
                  liked={quote.liked}
                  quote={quote.quoteText}
                  author={quote.quoteAuthor}
                  setLiked={this.setLiked}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
