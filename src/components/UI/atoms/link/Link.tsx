import './Link.css';

interface props {
  href: string;
  text: string;
}

function Link(props: props) {
  return (
    <a
      className="App-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </a>
  );
}

export default Link;
