import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../../features/fetch/fetchdata';
import './books.css';
import searchIcon from './assets/search.png'

const SearchBar = () => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const searchValue = useSelector(state => state.searchValue);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    dispatch(updateSearch({ searchValue: inputValue }));
    // Extract titles from Redux store data and filter based on input value
    const titles = data.map(item => item.title);
    const filteredTitles = titles.filter(title => title.toLowerCase().includes(inputValue.trim().toLowerCase()));
    setAutocompleteOptions(filteredTitles);
  };

  const handleOptionClick = (option) => {
    dispatch(updateSearch({ searchValue: option }));
    setAutocompleteOptions([]); // Clear autocomplete options after selection
  };

  return (
    <div className="search-bar-container">
      <input
        style={{ color: "red" }}
        value={searchValue}
        placeholder='Search books Here'
        className='search-bar'
        onChange={handleInputChange}
      />
      {(searchValue.trim() !== '' && autocompleteOptions) && (
        <div className="autocomplete-options">
          {autocompleteOptions.map((option, index) => (
            <div
              className='option-div'
              onClick={() => handleOptionClick(option)}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", cursor: "pointer" }}
              key={index}>
              <img
                style={{ marginTop: "10px" }}
                height="30px" src={searchIcon} />
              <p
                style={{ padding: "10px 15px" }}
                className='autocomplete-option' key={index} >
                {option}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BookCard = ({ title, authors, imageLinks, previewLink, ratingsCount }) => {
  return (
    <div className="book-card">
      <div>
        <img src={imageLinks.thumbnail} alt="Book Cover" />
      </div>
      <div className='book-details'>
        <h3>{title}</h3>
        <p className='padder1'>written by {authors.map((author) => author + " ")}</p>
        <p className='padder2'>⭐ ratings : {ratingsCount ? ratingsCount : "N / A"} ⭐</p>
        <a rel='noreferrer' target='_blank' href={previewLink}><button className='link-button'>Read For free</button></a>
      </div>
    </div>
  );
};

const Books = () => {
  const userName = useSelector(state => state.userName);
  const data = useSelector(state => state.data);
  const filteredData = useSelector(state => {
    const searchValue = state.searchValue.toLowerCase();
    return searchValue.trim() !== "" ? data.filter((book) => book.title.toLowerCase().includes(searchValue.trim())) : data;
  });
  const error = useSelector(state => state.errorMessage);

  return (
    <div className='contents'>
      <h1 className='userName'>
        Welcome <span style={{ color: "red" }}>{userName}</span> !!
      </h1>
      <SearchBar />
      {filteredData && filteredData.length > 0 ? (
        <>
          <h1 style={{ color: "red", margin: "20px" }}>- - - Featured books - - -</h1>
          <div className='books-list'>
            {filteredData.map((item, i) => (
              <BookCard key={i} {...item} />
            ))}
          </div>
        </>
      ) : (
        <h1 style={{ color: "red" }}>- - - No results found - - -</h1>
      )
      }
      {error && <p>{error}</p>}
    </div>
  );
};

export default Books;