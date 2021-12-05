import { doc } from "prettier";

const Logo = () => {
  const logo = document.createElement('img');
  logo.classList.add('logosection__logo');
  logo.src = "logo.png";
  logo.alt = "Breaking Bad logo";
  logo.onclick = () => {
    document.location.reload();
  }

  return logo;
}

export default Logo;