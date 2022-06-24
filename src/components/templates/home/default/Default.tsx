import './Default.css';
import { Button, Spinner } from 'components/UI/atoms';
import { Search } from 'components/UI/molecules';
import { getPopular } from 'services';

interface props {
  externalHref: string;
}

function Default(props: props) {
  return (
    <div className="default-home-template">
      <Search />
      <Button text="Get Popular Films" onclick={getPopular} />
      <Spinner />
    </div>
  );
}

export default Default;
