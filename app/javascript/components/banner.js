import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Have a good time", "Drink a cocktail"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
