import "./Default.css";
import Button from "../../../UI/atoms/button/Button";
import Header from "../../../UI/organisms/header/Header";
import login from "../../../../services/login"

interface props {
  logo: string;
  externalHref: string;
  primaryText: string;
}

function Default(props: props) {
  return (
    <div className="default-home-template">
      <Header
        logo={props.logo}
        primaryText={props.primaryText}
        externalHref={props.externalHref}
      />
      <Button text="login" onclick={login} />
    </div>
  );
}

export default Default;
