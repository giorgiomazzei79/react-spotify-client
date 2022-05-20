interface props {
  src: string;
  style?: React.CSSProperties;
}

function Logo(props: props) {
  return <img src={props.src} style={props.style} alt="logo" />;
}

export default Logo;
