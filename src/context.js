import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      console.log(data);
      const { drinks } = data;
      console.log(drinks);

      if (drinks) {
        const newCocktails = drinks.map(drink => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            category: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchDrinks();
  }, [search, fetchDrinks]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
