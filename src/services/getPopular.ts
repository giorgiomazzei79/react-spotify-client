async function getPopular() {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_CLIENT_ID}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  ).then((response) => response.json());
}

export default getPopular;
