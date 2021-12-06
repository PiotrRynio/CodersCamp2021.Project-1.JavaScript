import MainImage from "./MainImage.js"

describe('hasMainImageProperClass', () => {
    it('check if MainImage component is including mainImage__container class', () => {
        const mainImage = MainImage(); 
        expect(mainImage.classList).toContain("mainImage__container");
      });
    });
    