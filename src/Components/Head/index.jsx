export const Head = (pros) => {
  if (pros.length) {
    document.title = pros.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', pros.description);
  }

  return <></>;
};
