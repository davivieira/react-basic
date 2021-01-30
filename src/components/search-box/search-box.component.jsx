import React from 'react';
import "./search-box.styles.css";

export const SearchBox = ({ onChange }) => {

  return (
    <input
      className="search"
      type="search"
      placeholder="search users"
      onKeyUp={(evt) => onChange(evt.target.value)} />
  );
}