import React from "react";
// import Searchbar from "./components/Searchbar";
// import API from "./API";
import "./App.css";

function App() {
  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Search button clicked!", event.target.search.value);
    // const response = await API.searchCharacter(event.target.search.value);
    //console.log("From Unsplash API", response);
  };

  return (
    <>
      <h1>Character Search</h1>
      {/* <Searchbar onSearch={handleSearch} /> */}
    </>
  );
}

export default App;
