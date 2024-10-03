import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayRecipe from "./DisplayRecipe";

const EditRecipe = () => {
  const token = localStorage.getItem("jwt");
  const [recipes, setRecipes] = useState(null);
  const [save,setSave]=useState(0);
  console.log(save)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:6700/recipe/getuserrecipes",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRecipes(response.data);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    fetchData();
  }, [save]);
  console.log(recipes);
  return (
    <div>
      {recipes?.length > 0 ? (
        recipes.map((item) => {
          return (
            <div key={item._id}>
              <DisplayRecipe item={item} setSave={setSave} save={save} />
            </div>
          );
        })
      ) : (
        <h1>There is no recipes to edit</h1>
      )}
    </div>
  );
};

export default EditRecipe;
