import React from 'react';
import SearchBar from './components/SearchBar';
import API from './API';
import './App.css';

function App() {
  const handleSearch = async event => {
    event.preventDefault();
    console.log("Search button clicked!", event.target.search.value);
    const response = await API.fetchCharacters();
    console.log("From our API!", response.data);
  };

  return (
    <>
      <h1>Character Search</h1>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
