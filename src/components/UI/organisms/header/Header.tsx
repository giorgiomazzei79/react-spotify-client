import Link from "../../atoms/link/Link";
import Text from "../../atoms/text/Text";
import Logo from "../../atoms/logo/Logo";
import Button from "../../atoms/button/Button";
import "./Header.css";
import { SHA3 } from 'sha3';

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
  secondaryText: string;
}

function login() {
  const hash = new SHA3(512);
  const r = Math.random().toString(36).substring(7);
  hash.update(r);
  const digestedHash = hash.digest('hex')
  console.warn("digestedHash: ", digestedHash);
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
