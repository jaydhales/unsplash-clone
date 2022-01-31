import Header from './components/Header';
import Section from './components/Section';
import Modal from './components/Modal';

import './App.css';
import { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';

function App() {
  const [searchInput, setSearch] = useState('');
  const [images, setImages] = useState({});
  const [modalData, setModalData] = useState({});
  const modal = document.querySelector('#modal');
  const [photoID, setID] = useState('');
  const [searching, setSearching] = useState(false);

  const unsplash = createApi({
    accessKey: 'ZRs_bEtzMG-5sIxhFHsoo3kkorWJkxlxFKbSv0PduSo',
  });

  function runDom(query) {
    unsplash.search
      .getPhotos({
        query: query,
        page: 1,
        perPage: 578,
        orientation: 'landscape',
      })
      .then((result) => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          let data = [];
          let info = result.response.results;
          for (let index = 0; index < 8; index++) {
            const i = Math.floor(Math.random() * info.length);

            !data.includes(info[i]) && data.push(info[i]);
          }
          setImages(data);
        }
      });
  }

  useEffect(() => {
    runDom('African');
  }, []);

  useEffect(() => {
    unsplash.photos.get({ photoId: photoID }).then((result) => {
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
      } else {
        // handle success here
        setModalData(result.response);
      }
    });
  }, [photoID]);

  function showModal(e) {
    modal.style.visibility = 'visible';
    setID(
      e.target.tagName === 'DIV'
        ? e.target.id
        : e.target.tagName === 'SPAN'
        ? e.target.parentNode.id
        : e.target.parentNode.parentNode.id
    );
  }

  function closeModal(e) {
    modal.style.visibility = 'hidden';
    setID('');
    setModalData({});
  }
  function handleSearch() {
    setImages([]);
    setSearching(true);
    setTimeout(() => {
      runDom(`African ${searchInput}`);

      setTimeout(() => {
        setSearching(false);
        setSearch('');
      }, 2000);
    }, 3000);
  }

  return (
    <div className='App'>
      <Header
        searchInput={searchInput}
        addSearchInput={(e) => setSearch(e.target.value)}
        handleSearch={(e) => e.key === 'Enter' && handleSearch()}
        searching={searching}
      />
      <Section
        searchInput={searchInput}
        images={images}
        showModal={showModal}
      />
      <Modal closeModal={closeModal} modalData={modalData} />
    </div>
  );
}

export default App;
