import React from 'react'

export default function Input({type, name, htmlFor, placeholder }) {
  return (
    <legend htmlFor={htmlFor} className="text-sm w-full  md:w-[500px] ">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        minLength="2"
        className="w-full md:w-[500px] my-4 py-5 px-5 bg-bg border placeholder-lightGreen border-[#C9BBA9] rounded-lg "
      />
    </legend>
  );
}
