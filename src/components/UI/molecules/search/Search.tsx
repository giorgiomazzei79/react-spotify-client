import './Search.css'

function Search() {
  return (
    <div className="search">
      <label className="search__label" htmlFor="username">search</label>
      <input id="username" />
    </div>
  );
}

export default Search;