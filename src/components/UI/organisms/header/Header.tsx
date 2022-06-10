import Text from "../../atoms/text/Text";
import Logo from "../../atoms/logo/Logo";
import Search from "../../molecules/Search";
import "./Header.css";

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
}

function Header(props: props) {
  return (
    <header className="header">
      <div className="header__container--logo">
        <Logo src={props.logo} />
      </div>
      <div className="header__container--title">
        <Text primaryText={props.primaryText} />
      </div>
      <div className="header__container--search">
        <Search />
      </div>
    </header>
  );
}

export default Header;
