import React, { useMemo, useState } from "react";

const AddRecipe = () => {

const [title,setTitle]=useState('');

const [Ingredients,setIngredients]=useState('');

const [description,setDescription]=useState('');

const [cookingMethod,setCookingMethod] =useState('');

const [equipmentNeeded,setEquipmentNeeded]=useState('');

const [preparationTime,setPreparationTime]=useState('');

const [loading, setLoading] = useState(false);


const token = localStorage.getItem('jwt');

const [message,setMessage] =useState('')




const handleSubmit=(e)=>{
    e.preventDefault();

    setLoading(true)

    fetch('http://localhost:6700/recipe/createrecipe',{
        method:'POST',
        body:JSON.stringify({title,Ingredients,description,cookingMethod,equipmentNeeded,preparationTime}),
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status===200){
            setMessage("Recipe Created Successfully !!!")

        }
    })

}




  return (
    <div>
      <div className="">
        <form className="ml-10 mt-10" onSubmit={handleSubmit}>
          <label className="text-white">
            Title:
            <input type="text" className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" onChange={(e)=>{setTitle(e.target.value)}} required/>
          </label>

          <label className="text-white">
            Ingredients:
            <textarea className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" placeholder="Write one after another in a bullet points" onChange={(e)=>{setIngredients(e.target.value)}} required />
          </label>
          <label className="text-white">
            Description:
            <textarea type="text" className="w-11/12 ml-2 p-2  rounded-md block text-black mb-3" onChange={(e)=>{setDescription(e.target.value)}} required/>
          </label>
          <label className="text-white">
           Preparation Time:
            <input type="text" className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" required onChange={(e)=>{setPreparationTime(e.target.value)}} />
          </label>
          <label className="text-white">
           Cooking Method:
            <input type="text" className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3" required onChange={(e)=>{setCookingMethod(e.target.value)}} />
          </label>
          <label className="text-white">
          Equipment Needed:
            <input type="text" className="w-11/12 ml-2 p-2 rounded-md block text-black mb-3"  required onChange={(e)=>{setEquipmentNeeded(e.target.value)}} />
          </label>
          <div className="text-center mt-3 text-white bg-slate-900 rounded-md w-11/12 p-2 ">
          <button disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
          </div>
        </form>
      </div>
      {message && setTimeout(()=>{
        <p className='text-green-500'>
            {message}
        </p>
      },2000)}
    </div>

  );
};

export default AddRecipe;
