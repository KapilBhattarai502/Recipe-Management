import React from "react";

const AddRecipe = () => {
  return (
    <div>
      <div className="">
        <form className="ml-10 mt-10">
          <label className="text-white">
            Title:
            <input type="text" className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" />
          </label>

          <label className="text-white">
            Ingredients:
            <textarea className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" placeholder="" />
          </label>
          <label className="text-white">
            Description:
            <textarea type="text" className="w-11/12 ml-2 p-2  rounded-md block text-black mb-3" />
          </label>
          <label className="text-white">
           Cooking Time
            <input type="text" className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" />
          </label>
          <label className="text-white">
          Equipment Needed:
            <input type="text" className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" />
          </label>
          <div className="text-center mt-3 text-white bg-slate-900 rounded-md w-11/12 p-2 ">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
