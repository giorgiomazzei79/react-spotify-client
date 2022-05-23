import Link from "../atoms/Link";
import Text from "../atoms/Text";
import Logo from "../atoms/Logo";

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

const logoStyle: React.CSSProperties = {
  height: "40vmin",
  pointerEvents: "none",
};

const linkStyle: React.CSSProperties = {
  color: "#61dafb",
};

// .Default-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

const headerStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
};

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
  secondaryText: string;
}

function Header(props: props) {
  return (
    <header style={headerStyle}>
      <Logo src={props.logo} style={logoStyle} />
      <Text primaryText={props.primaryText} />
      <Link
        href={props.externalHref}
        text={props.secondaryText}
        style={linkStyle}
      />
    </header>
  );
}

export default Header;
