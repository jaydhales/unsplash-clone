import React from 'react';

function Card(props) {
  let spanArr = [];

  for (let i = 0; i < 8; i++) {
    spanArr.push(<span className='loader' key={i}></span>);
  }
  return (
    <section>
      {props.images.length ? '' : spanArr}
      {props.images.length > 0 &&
        props.images.map((img) => (
          <a
            href='#modal'
            className='card'
            onClick={props.showModal}
            key={img.id}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${img.urls.small})`,
                backgroundSize: 'cover',

                backgroundPosition: 'center',
              }}
              id={img.id}
            >
              <span className='desc'>
                <p>{img.user.name}</p>
              </span>
            </div>
          </a>
        ))}
    </section>
  );
}

export default Card;
