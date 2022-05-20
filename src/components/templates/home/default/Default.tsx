import "./Default.css";
import Link from "../../../UI/atoms/Link";
import Text from "../../../UI/atoms/Text";
import Logo from "../../../UI/atoms/Logo";

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
  secondaryText: string;
}

const linkStyle: React.CSSProperties = {
  color: "#61dafb",
};

const logoStyle: React.CSSProperties = {
  height: "40vmin",
  pointerEvents: "none",
};


//TODO: decide how to pass this style to the logo
// @media (prefers-reduced-motion: no-preference) {
//   .Default-logo {
//     animation: Default-logo-spin infinite 20s linear;
//   }
// }

// @keyframes Default-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

function Default(props: props) {
  return (
    <div className="Default">
      <header className="Default-header">
        <Logo src={props.logo} style={logoStyle} />
        <Text primaryText={props.primaryText} />
        <Link
          href={props.externalHref}
          text={props.secondaryText}
          style={linkStyle}
        />
      </header>
    </div>
  );
}

export default Default;
