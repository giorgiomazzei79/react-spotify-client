import Link from "../../atoms/link/Link";
import Text from "../../atoms/text/Text";
import Logo from "../../atoms/logo/Logo";
import "./Header.css";

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
  secondaryText: string;
}

function Header(props: props) {
  return (
    <header className="App-header">
      <Logo src={props.logo} />
      <Text primaryText={props.primaryText} />
      <Link
        href={props.externalHref}
        text={props.secondaryText}
      />
    </header>
  );
}

export default Header;
