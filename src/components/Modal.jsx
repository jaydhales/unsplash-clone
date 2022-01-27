import React from 'react';

function Modal(props) {
  return (
    <div id='modal'>
      <div className='modal-content'>
        {props.modalData.user && (
          <>
            <img
              src={props.modalData.urls.regular}
              alt={props.modalData.alt_description}
            />
            <p>{props.modalData.user.name}</p>
            <p className='location'>{props.modalData.location.name}</p>
          </>
        )}
        <a href='#home' id='closeBtn' onClick={props.closeModal}>
          x
        </a>
      </div>
    </div>
  );
}

export default Modal;
