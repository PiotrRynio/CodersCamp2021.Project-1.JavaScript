import Logo from "../components/Logo";

const LogoSection = () => {
  const logoSection = document.createElement('section');
  logoSection.classList.add('logoSection');
  logoSection.append(Logo());

  return logoSection;
};
export default LogoSection;
