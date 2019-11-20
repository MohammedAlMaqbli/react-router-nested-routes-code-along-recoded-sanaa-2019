import React, { Component } from "react";

export default class MovieShow extends Component {
  render() {
    const { match, movies } = this.props;
    return <div>{movies[match.params.movieId].title}</div>;
  }
}
