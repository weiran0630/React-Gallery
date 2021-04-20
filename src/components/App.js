import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Footer from "./Footer";

class App extends React.Component {
  // deafult state to [] to use Array methods like map
  state = { images: [] };

  onSearchSubmit = async (receivedTerm) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: receivedTerm },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* pass a function props to SearchBar and get the receivedTerm */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <Footer />
      </div>
    );
  }
}

export default App;
