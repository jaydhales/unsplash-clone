import React from 'react';

function Card(props) {
  return (
    <>
      {props.images.length > 0 &&
        props.images.map((img) => (
          <a href='#modal' onClick={props.showModal} key={img.id}>
            <div
              className='card'
              style={{
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
    </>
  );
}

export default Card;
