import Link from "../../atoms/link/Link";
import Text from "../../atoms/text/Text";
import Logo from "../../atoms/logo/Logo";
import Button from "../../atoms/button/Button";
import login from "../../../../services/login"
import "./Header.css";

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
  secondaryText: string;
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
