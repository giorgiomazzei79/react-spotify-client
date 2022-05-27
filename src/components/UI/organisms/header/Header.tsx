import Link from "../../atoms/link/Link";
import Text from "../../atoms/text/Text";
import Logo from "../../atoms/logo/Logo";
import Button from "../../atoms/button/Button";
import "./Header.css";

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
  secondaryText: string;
}

function login() {
  const r = Math.random().toString(36).substring(7);
  console.warn("r: ", r);
}

function Header(props: props) {
  return (
    <header className="header">
      <Logo src={props.logo} />
      <Text primaryText={props.primaryText} />
      <Link href={props.externalHref} text={props.secondaryText} />
      <Button text="login" onclick={login} />
    </header>
  );
}

export default Header;
