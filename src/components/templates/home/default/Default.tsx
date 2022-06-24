import './Default.css';
import { Button, Spinner } from 'components/UI/atoms';
import { Search } from 'components/UI/molecules';
import { getPopular } from 'services';
import { useState, useEffect } from 'react';

interface props {
  externalHref: string;
}

function Default(props: props) {
  const [films, setFilms] = useState({
    page: undefined,
    results: [],
    total_pages: undefined,
    total_results: undefined,
  });
  const [started, setStarted] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getPopular()
      .then((films) => {
        if (!started) {
          setFilms(films);
          setStarted(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  });

  console.warn('Films: ', films);
  console.warn('isError: ', isError);

  return (
    <div className="default-home-template">
      <Search />
      <Button text="Get Popular Films" onclick={getPopular} />
      {!started && <Spinner />}
      {isError && <p>error</p>}
    </div>
  );
}

export default Default;
