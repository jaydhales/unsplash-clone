import React from 'react';

function Header(props) {
  return (
    <header>
      {props.searching ? (
        <h1>
          Searching for{' '}
          <span style={{ color: '#6f7692' }}>“{props.searchInput}”</span>
        </h1>
      ) : (
        <input
          type='text'
          value={props.searchInput}
          onChange={props.addSearchInput}
          onKeyUp={props.handleSearch}
          placeholder='Search for Photos'
        />
      )}
    </header>
  );
}

export default Header;
