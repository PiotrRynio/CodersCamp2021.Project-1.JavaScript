const Logo = () => {
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = '../public/images/logo.png';
  logo.alt = 'Breaking Bad logo';
  logo.onclick = () => {
    document.location.reload();
  };

  return logo;
};

export default Logo;
