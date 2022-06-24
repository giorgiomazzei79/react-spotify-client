function getPopular() {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_CLIENT_ID}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  )
    .then((response) => {
      response.json().then((data) => {
        console.warn('data: ', data);
      });
    })
    .catch((error) => console.log(error));
}

export default getPopular;
