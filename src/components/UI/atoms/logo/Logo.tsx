import './Logo.css';

interface props {
  src: string;
}

function Logo(props: props) {
  return <img src={props.src} className="logo" alt="logo" />;
}

export default Logo;
