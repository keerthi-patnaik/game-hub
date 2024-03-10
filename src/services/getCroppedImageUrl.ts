const getCroppedImageUrl = (url: string) => {
  //original => https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  //modified => https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  // index to get 27

  const index = url.indexOf('/games/');
  let newUrl = url.slice(0, index) + '/crop/600/400' + url.slice(index);
  return newUrl;
};

export default getCroppedImageUrl;
