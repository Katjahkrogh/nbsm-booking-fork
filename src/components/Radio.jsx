import React from 'react';

function Radio({ behandling, id, onTreatmentSelect, checked }) {
  return (
    <div className="w-full md:w-[500px] rounded-xl bg-lightBeige">
      <input
        type="radio"
        name="behandling"
        id={id}
        value={behandling}
        className="sr-only peer"
        onChange={(e) => onTreatmentSelect(e.target.value)}
        checked={checked}
      />
      <label
        htmlFor={id}
        aria-label={behandling}
        className="block cursor-pointer select-none rounded-xl py-4 pl-4 peer-checked:bg-green peer-checked:font-semibold peer-checked:text-white peer-hover:bg-beige peer-checked:hover:bg-green transition-all 	">
        {behandling}
      </label>
    </div>
  );
}

export default Radio;
