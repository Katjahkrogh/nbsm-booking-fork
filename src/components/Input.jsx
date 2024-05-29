import React from 'react';

export default function Input({
  type,
  name,
  htmlFor,
  placeholder,
  onChange,
  minLength,
  value,
  className,
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm w-full  md:w-[500px] ">
      <input
        type={type}
        name={name}
        id={htmlFor}
        onChange={onChange}
        placeholder={placeholder}
        required
        value={value}
        minLength={minLength}
        className={`w-full md:w-[500px] my-4 py-4 px-5 bg-bg border placeholder-lightGreen border-[#f0eae2] rounded-xl ${className}`}
      />
    </label>
  );
}
