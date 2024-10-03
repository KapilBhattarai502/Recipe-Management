import React, { useState } from "react";
import axios from "axios";

const DisplayRecipe = ({ item,setSave }) => {

  const {
    Ingredients,
    cookingMethod,
    description,
    equipmentNeeded,
    preparationTime,
    title,
    _id,
  } = item;

  const [isEditing, setIsEditing] = useState(false);

  const [editedRecipe, seteditedRecipe] = useState({
    Ingredients,
    cookingMethod,
    description,
    equipmentNeeded,
    preparationTime,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    seteditedRecipe({
      ...editedRecipe,
      [name]: value,
    });
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    setIsEditing(false);
    await axios.put(`http://localhost:6700/recipe/editrecipes/${_id}`,editedRecipe);
    setSave((prevSave) => prevSave + 1);
  };
  return (
    <div className="bg-slate-800 text-white mt-3 p-4 rounded-md">
      {isEditing ? (
        <div className="">
          <h1>{title.toUpperCase()}</h1>
          <div className="flex items-center mt-2">
            <p className="text-lg">Ingredients:</p>
            <input
              type="text"
              name="Ingredients"
              className="bg-transparent flex-grow text-lg"
              onChange={handleChange}
              value={editedRecipe.Ingredients}
            />
          </div>
          <div className="flex items-center mt-2">
            <p className=" text-lg">Cooking Method:</p>
            <input
              type="text"
              name="cookingMethod"
              className="bg-transparent flex-grow text-lg"
              value={editedRecipe.cookingMethod}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mt-2 ">
            <p className=" text-lg">Description:</p>
            <input
              type="text"
              name="description"
              className="bg-transparent flex-grow text-lg"
              value={editedRecipe.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mt-2">
            <p className=" text-lg">Equipment Needed:</p>
            <input
              type="text"
              name="equipmentNeeded"
              className="bg-transparent flex-grow text-lg"
              value={editedRecipe.equipmentNeeded}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mt-2">
            <p className=" text-lg">PreparationTime:</p>
            <input
              type="text"
              name="preparationTime"
              className="bg-transparent flex-grow text-lg"
              value={editedRecipe.preparationTime}
              onChange={handleChange}

            />
          </div>
        </div>
      ) : (
        <div>
          <h1>{title.toUpperCase()}</h1>
          <p className="text-white mt-2 text-lg">Ingredients:{Ingredients}</p>
          <p className="text-white mt-2 text-lg">
            Cooking Method:{cookingMethod}
          </p>
          <p className="text-white mt-2 text-lg">Description:{description}</p>
          <p className="text-white mt-2 text-lg">
            Equipment Needed:{equipmentNeeded}
          </p>
          <p className="text-white mt-2 text-lg">
            PreparationTime:{preparationTime}
          </p>
        </div>
      )}

      <div className="mt-4">
        {isEditing ? (
          <button
            className="bg-green-400 mr-3 py-2 px-4 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-green-400 mr-3 py-2 px-4 rounded-md"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}

        <button className="bg-red-400 p-2 rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default DisplayRecipe;
