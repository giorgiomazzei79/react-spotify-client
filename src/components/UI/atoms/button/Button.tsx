interface props {
  text: string;
  onclick(): void;
}

function Button(props: props) {
  return (
    <button type="button" onClick={props.onclick}>
      {props.text}{" "}
    </button>
  );
}

export default Button;
