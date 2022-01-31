import React from 'react';
import Card from './Card.jsx';

function Section(props) {

  return (
    <>
      <Card
        searchInput={props.searchInput}
        images={props.images}
        showModal={props.showModal}
      />
      
    </>
  );
}

export default Section;
