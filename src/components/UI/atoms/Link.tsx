interface props {
  href: string;
  text: string;
  style?: React.CSSProperties;
}

const style = {
  color: "#CD5C5C",
};

function Link(props: props) {
  return (
    <a
      style={{ ...props.style, ...style }}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </a>
  );
}

export default Link;
