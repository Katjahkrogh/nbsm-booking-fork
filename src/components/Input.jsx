import React from 'react'

export default function Input({type, name, htmlFor, placeholder }) {
  return (
    <legend htmlFor={htmlFor} className="text-sm ">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-96 md:w-[500px] my-8 py-5 px-6 bg-bg border placeholder-lightGreen border-[#C9BBA9] rounded-lg"
      />
    </legend>
  );
}
