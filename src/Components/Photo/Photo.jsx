import React from 'react';
import { useParams } from 'react-router-dom';

const Photo = () => {
  const { id } = useParams();

  return <div>Photo</div>;
};

export default Photo;
