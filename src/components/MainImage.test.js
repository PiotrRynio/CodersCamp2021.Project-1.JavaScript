import { renderComponent } from '../testsUtilities/renderComponent';
import MainImage, { defaultImage } from './MainImage';

describe('MainImage', () => {
  it('check if container component is including mainImageContainer class', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.classList).toContain('mainImageContainer');
  });

  it('check if image component is including mainImageContainer__image class', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.firstChild.classList).toContain('mainImageContainer__image');
  });

  it('check if image component has an src attribute', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.firstChild.hasAttribute('src')).toBe(true);
  });

  it('check if image has an alternative text', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.firstChild.hasAttribute('alt')).toBe(true);
  });

  it('check if image component is showing a proper content (photo) in default', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.firstChild.src).toEqual(defaultImage);
  });

  it('check if calling setImage function changes the photo', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.firstChild.src).toEqual(defaultImage);

    const newPhotoUrl =
      'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg';
    mainImage.setImage(newPhotoUrl);
    expect(mainImage.firstChild.src).toEqual(newPhotoUrl);
  });
});
