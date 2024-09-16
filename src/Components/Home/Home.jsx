import React, { useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import SellIcon from "@mui/icons-material/Sell";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwt");

  const params = new URLSearchParams(location.search);

  const [titleSearch, settitleSearch] = useState("");

  const [displayData, setDisplaydata] = useState(null);

  useEffect(() => {
    if (titleSearch) {
      params.set("title", titleSearch);
    } else {
      params.delete("title");
    }
    params.set("title", titleSearch);

    navigate({
      pathname: location.pathname,
      search: params.toString(),
    });

    fetch(`http://localhost:6700/recipe/search?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((response) => {
      response.json().then((data) => {
        setDisplaydata(data);
      });
    });
  }, [titleSearch]);

  const inputRef = useRef(null);
  const handleInput = () => {
    inputRef.current.focus();
  };
  const handleSearch = (e) => {
    settitleSearch(e.target.value);
  };

  const handleRecipes = () => {
    navigate("/recipes");
  };
  const handleAddRecipe=()=>{
    navigate('/addrecipe')

  }

  return (
    <div>
      <div>
        <h1 className="text-center text-white text-7xl font-bold">Cook Book</h1>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer" onClick={handleAddRecipe}>
              <p className="text-lg">Add A Recipe</p>
              <AddIcon />
            </div>
          </Grid>
          <Grid size={4} className="p-4">
            <div
              className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer"
              onClick={handleRecipes}
            >
              <p className="text-lg">My Recipes</p>
              <MenuBookIcon />
            </div>
          </Grid>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <input
                ref={inputRef}
                type="text"
                className="w-full border-none bg-slate-800 text-lg"
                placeholder="Search"
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
              <SearchIcon onClick={handleInput} />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Tag</p>
              <SellIcon />
            </div>
          </Grid>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Favorite</p>
              <FavoriteIcon />
            </div>
          </Grid>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Edit Recipe</p>
              <EditIcon />
            </div>
          </Grid>
        </Grid>

        {displayData?.length > 0 &&
          displayData.map((item, index) => {
            return (
              <div className="p-5 text-center bg-slate-800" key={index}>
                <h1 className="text-xl text-white font-semibold">
                  {item.title.toUpperCase()}
                </h1>
                <div>
                  <p className="text-white mt-2 text-lg">
                    Ingredients:{item.Ingredients}
                  </p>
                  <p className="text-white mt-2 text-lg">
                    Cooking Method:{item.cookingMethod}
                  </p>
                  <p className="text-white mt-2 text-lg">
                    Description:{item.description}
                  </p>
                  <p className="text-white mt-2 text-lg">
                    Equipment Needed:{item.equipmentNeeded}
                  </p>
                  <p className="text-white mt-2 text-lg">
                    PreparationTime:{item.preparationTime}
                  </p>
                </div>
              </div>
            );
          })}
          {displayData?.length===0 && <div>
            <h1>You havenot Created Any Recipes</h1>
          </div>}
      </div>
    </div>
  );
};

export default Home;
