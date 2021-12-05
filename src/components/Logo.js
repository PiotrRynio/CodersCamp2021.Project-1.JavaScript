const Logo = () => {
  const logo = document.createElement('img');
  logo.classList.add('logosection__logo');
  logo.src = "logo.png";
  logo.alt = "Breaking Bad logo";

  return logo;
}

export default Logo;