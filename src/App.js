import React from 'react';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  const moreDetail = watch("moreDetail");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className = "block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">First Name</label>
        </div>  
        <div className="md:w-2/3">  
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              type="text"
              name="First name"
              placeholder="First Name"
              ref={register({ 
                    required: true,                               //Basic validation
                    maxLength: 80,                                //Basic validation
                  })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className = "block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Last Name</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            name="lastName"
            placeholder="Last Name"
            ref={register({
              validate: value => value.length > 3                  //Custom validation
            })}
          />
        </div>
      </div>
      {errors.lastName && <p className ="text-red-800 text-md">Your last name is less than 3 characters</p>} 
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className = "block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Email</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            name="email"
            placeholder="test123@hotmail.com"
            type="text"
            ref={register({
              required:{
                value:true,
                message:"Email is required"
              },
              pattern:{
                value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid Email"
              }
            })}
          />
        </div>
        </div>
      {errors.email && <p className ="text-red-800 text-md"> {errors.email.message}</p>}
      
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Age</label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            name="age"
            placeholder="0"
            type="text"
            ref={register({
              validate: {
                positiveNumber: value => parseFloat(value) > 0,       //Adding multiple validations
                lessThanHundred: value => parseFloat(value) < 200
              }
            })}
          />
        </div>
      </div>
      {errors.age && errors.age.type === "positiveNumber" && (     //Conditional validation messages
        <p className ="text-red-800 text-md">Your age is invalid</p>
      )}
      {errors.age && errors.age.type === "lessThanHundred" && (
        <p className ="text-red-800 text-md">Your age should be greater than 200</p>
      )}

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input 
                className="mr-2 leading-tight"
                name="moreDetail" 
                type="checkbox"
                ref={register} 
            />
            <span class="text-sm">More Details</span>
          </label>
      </div>

      {moreDetail && (                                              //Conditional Input Field
        <div className="md:flex md:items-center mb-6"> 
           <div className="md:w-1/3">
              <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Interests</label>                               
            </div>
            <div className="md:w-2/3">
              <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                  type="text"
                  name="Interests"
                  ref={register} 
              />
              </div>
        </div>
      )}
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div class="md:w-2/3">
          <input 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit" />
        </div>
      </div>
    </form>
  );
}

export default App;
