import './Default.css';
import { Button, Spinner } from 'components/UI/atoms';
import { Search } from 'components/UI/molecules';
import { login } from 'services';

interface props {
  externalHref: string;
}

function Default(props: props) {
  return (
    <div className="default-home-template">
      <Search />
      <Button text="login" onclick={login} />
      <Spinner />
    </div>
  );
}

export default Default;
