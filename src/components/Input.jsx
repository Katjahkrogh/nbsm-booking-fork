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
  aria,
  label,
}) {
  return (
    <label
      aria-label={aria}
      htmlFor={htmlFor}
      className="text-xs text-lightGreen w-full md:w-[500px]">
      {label}
      <input
        type={type}
        name={name}
        id={htmlFor}
        onChange={onChange}
        placeholder={placeholder}
        required
        value={value}
        minLength={minLength}
        className={`w-full md:w-[500px] mb-4 mt-2 py-4 px-5 bg-bg border placeholder-lightGreen text-base border-[#f0eae2] rounded-xl ${className}`}
      />
    </label>
  );
}
