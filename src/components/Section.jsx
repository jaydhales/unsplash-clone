import React from 'react';
import Card from './Card.jsx';

function Section(props) {
  let spanArr = [];

  for (let i = 0; i < 6; i++) {
    spanArr.push(<span className='loader' key={i}></span>);
  }

  return (
    <section>
      <Card
        searchInput={props.searchInput}
        images={props.images}
        showModal={props.showModal}
      />
      {props.images.length ? '' : spanArr}
    </section>
  );
}

export default Section;
