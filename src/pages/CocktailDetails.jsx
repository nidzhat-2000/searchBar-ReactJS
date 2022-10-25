import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const CocktailDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getCocktailDetails = async () => {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        const { drinks } = data;
        console.log(drinks);
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    getCocktailDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  // {
  //   return loading && <Loading />;
  // }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
            <span className="drink-data">info: </span>
            {info}
            <span className="drink-data">category: </span>
            {category}
            <span className="drink-data">glass: </span>
            {glass}
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient} </span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetails;
