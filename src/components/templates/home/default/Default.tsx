import "./Default.css";
import Button from "../../../UI/atoms/button/Button";
import Search from "../../../UI/molecules/search/Search";
import login from "../../../../services/login";

interface props {
  externalHref: string;
}

function Default(props: props) {
  return (
    <div className="default-home-template">
      <Search />
      <Button text="login" onclick={login} />
    </div>
  );
}

export default Default;
