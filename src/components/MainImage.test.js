import { renderComponent } from '../testsUtilities/renderComponent';
import MainImage, { defaultImage } from './MainImage';

describe('hasMainImageProperClass', () => {
  it('check if MainImage div component is including mainImage__container class', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.classList).toContain('mainImage__container');
  });

  it('check if MainImage image component is showing a proper content (photo)', () => {
    renderComponent(MainImage());

    const mainImage = MainImage();
    expect(mainImage.firstChild.src).toEqual(defaultImage);
  });
});
