import React, { useEffect, useState } from "react";

const UserRecipes = () => {
  const jwt = localStorage.getItem("jwt");
  // console.log(jwt);

  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    console.log("use Effect");
    fetch("http://localhost:6700/recipe/getuserrecipes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((response) => {
      response.json().then((data) => {
        setDisplayData(data);
      });
    });
  }, [jwt]);
  console.log("display Data is", displayData);

  return (
    <div>
      {displayData?.length > 0 &&
        displayData.map((item, index) => {
          return (
            <div
              className=" bg-slate-800 text-white mt-3 text-center p-4 rounded-md"
              key={index}
            >
              <h1>{item.title.toUpperCase()}</h1>
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
    </div>
  );
};

export default UserRecipes;
