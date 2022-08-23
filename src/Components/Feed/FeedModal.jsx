import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './FeedModal.module.css';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  useFetch(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <img src={photo.src} alt="" />}
    </div>
  );
};

export default FeedModal;
