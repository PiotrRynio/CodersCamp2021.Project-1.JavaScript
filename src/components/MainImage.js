export const defaultImage =
  'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg';

const MainImage = (image_path = defaultImage) => {
  const mainImage = document.createElement('div');
  mainImage.classList.add('mainImage__container');

  const image = document.createElement('img');
  image.classList.add('mainImage__image');
  image.setAttribute('alt', 'Image of the questioned character');
  mainImage.appendChild(image);

  mainImage.setImage = (imagePath) => {
    image.src = imagePath;
  };

  mainImage.setImage(image_path);

  return mainImage;
};

export default MainImage;
