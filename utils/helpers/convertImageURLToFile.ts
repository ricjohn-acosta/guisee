const urlToObject = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], 'image.jpg', { type: blob.type });

  if (response.status === 200) {
    return {
      status: response.status,
      file,
    };
  }
  return {
    status: response.status,
    errorMsg: 'We can\'t seem to process the image url :(',
  };
};

export default urlToObject;
