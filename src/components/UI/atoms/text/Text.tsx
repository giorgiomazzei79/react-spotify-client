import "./Text.css"

interface props {
  primaryText: string;
}

function Text(props: props) {
  return <p className="text">{props.primaryText}</p>;
}

export default Text;
