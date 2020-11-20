import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name"> MovieList</h1>
        <div data-ns-test="project-description">
          This web app provides the movie list and if You want to like you can
          like it, add to watchlist or you can remove it from MovieList
        </div>
      </>
    );
  }
}

export default App;
