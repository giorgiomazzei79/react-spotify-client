import logo from "../../../assets/logo.svg";
import Default from "../../templates/home/default/Default";

function Home() {
  return (
    <Default
      logo={logo}
      externalHref="https://reactjs.org"
      primaryText="TMDB client"
    />
  );
}

export default Home;
