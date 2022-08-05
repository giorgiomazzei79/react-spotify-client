import { Link } from 'react-router-dom';
import './Default.css';
import { Button, Spinner } from 'components/UI/atoms';
import { Search } from 'components/UI/molecules';
import { getPopular } from 'services';
import { useState, useEffect } from 'react';

interface props {
  externalHref: string;
}

const Card = (args: any) => (
  <div className="card" key={args.id}>
    <Link to={args.link} className="card__link">
      <div className="card__link__inner-wrapper">
        <img src={args.src} alt={args.alt} width="220" height="330"></img>
        <p className="card__link__inner-wrapper__title">{args.title}</p>
        <p className="card__link__inner-wrapper__description">
          {args.overview}
        </p>
      </div>
    </Link>
  </div>
);

const renderFilms = (filmList: any[]) =>
  filmList &&
  Array.isArray(filmList) &&
  filmList.length &&
  filmList.map((film) =>
    Card({
      link: '/details',
      src: `http://image.tmdb.org/t/p/w220_and_h330_face/${film.poster_path}`,
      alt: film.title,
      id: film.id,
      title: film.title,
      overview: film.overview,
    }),
  );
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

  const { results } = films;

  return (
    <div className="default-home-template">
      <Search />
      <Button text="Get Popular Films" onclick={getPopular} />
      {!started && <Spinner />}
      {isError && <p>error</p>}
      {renderFilms(results)}
    </div>
  );
}

export default Default;
