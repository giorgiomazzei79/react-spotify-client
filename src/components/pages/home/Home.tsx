import logo from "../../../assets/logo.svg";
import Default from "../../templates/home/default/Default";

function Home() {
  return (
    <Default
      logo={logo}
      externalHref="https://reactjs.org"
      primaryText="This is the Home page."
      secondaryText="Learn React"
    />
  );
}

export default Home;
