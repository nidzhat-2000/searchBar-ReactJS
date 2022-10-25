import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearch } = useGlobalContext();

  /*
  const searchValue = React.useRef('');
  const searchCocktail = () => {
    setSearch(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
*/

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> sarch your favorite cocktail</label>
          {/* <input
            type="text"
            name=""
            id=""
            ref={searchValue}
            onChange={searchCocktail}
          /> */}
          <input
            type="text"
            name=""
            id=""
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

/* <input
type="text"
onKeyPress={e => {
  console.log(e.target.value);
  setSearch(console.log(e.target.value));
}}
/>
<button onClick={e => setSearch(console.log(e.target))}>here </button> */
