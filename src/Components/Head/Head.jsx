import React, { useEffect } from 'react';

const Head = (pros) => {
  useEffect(() => {
    document.title = pros.title + ' | Dogs';
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', pros.description || '');
  }, [pros]);

  return <></>;
};

export default Head;
