import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Card from "./components/Card";
import "./App.css";
import Grid from "@material-ui/core/Grid";

export default function App() {
  const APP_ID = "97023952";
  const APP_KEY = "12d9079c56d03243fe7659612bb521b1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className={App.bigblue}> Cooking Delicious</h1>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Submit</button>
      </form>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={5} sm={4}>
            <Card
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}

              // ingredients={recipe.recipe.ingredients}
            />
          </Grid>
        ))}
      </Grid>
      <Counter />
    </div>
  );
}
