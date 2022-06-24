function login() {
  fetch('https://api.themoviedb.org/4/list/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + process.env.REACT_APP_READ_ACCESS_TOKEN,
    },
  })
    .then((response) => {
      response.json().then((data) => {
        console.warn('data: ', data);
      });
    })
    .catch((error) => console.log(error));
}

export default login;
