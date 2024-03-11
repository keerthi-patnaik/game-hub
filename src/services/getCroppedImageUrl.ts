import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  //original => https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  //modified => https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  // index to get 27

  if (!url) return noImage;

  const index = url.indexOf('/media/') + '/media/'.length;
  let newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  return newUrl;
};

export default getCroppedImageUrl;
