interface props {
  primaryText: string;
}

function Text(props: props) {
  return <p>{props.primaryText}</p>;
}

export default Text;
