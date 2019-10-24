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
          quotes: data.results
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Quotes</h1>
        {this.state.fetching ? (
          <p>Loading...</p>
        ) : (
          <div>
            {this.state.quotes.map(quote => {
              // console.log("quote?", quote);
              return (
                <Quote quote={quote.quoteText} author={quote.quoteAuthor} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
