import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const Search = () => {
  const navigate = useNavigate();
  const inputRef=useRef(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [titleSearch, settitleSearch] = useState("");
  const handleInput = () => {
    inputRef.current.focus();
  };
  const handleSearch = (e) => {
    settitleSearch(e.target.value);
  };
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
      },
    }).then((response) => {
      response.json().then((data) => {
        setDisplaydata(data);
      });
    });
  }, [titleSearch, navigate,location.pathname,params.toString()]);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={12} className="p-4">
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
      {displayData?.length > 0 &&
          displayData.map((item, index) => {
            return (
              <div
                className="p-5 text-center bg-slate-800 relative"
                key={index}
              >
                <CancelPresentationIcon className="absolute right-2 top-4 cursor-pointer text-white" onClick={()=>removeRecipe(item._id)} />
                <div>
                  <h1 className="text-xl text-white font-semibold">
                    {item.title.toUpperCase()}
                  </h1>
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
    </div>
  );
};

export default Search;
