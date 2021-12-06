import MainImage from "./MainImage.js"

describe('hasMainImageProperClass', () => {
    it('check if MainImage div component is including mainImage__container class', () => {
        const mainImage = MainImage(); 
        expect(mainImage.classList).toContain("mainImage__container");
      });
    it('check if MainImage image component is including mainImage__image class', () => {
        const mainImage = MainImage(); 
        expect(mainImage.classList).toContain("mainImage__image");
      });
  });
  