import React from "react";

function Radio({ behandling, id, onTreatmentSelect }) {
  return (
    <div className="w-full md:w-[500px] rounded-xl bg-lightBeige">
      <input
        type="radio"
        name="behandling"
        id={id}
        value={behandling}
        className="peer hidden"
        onChange={(e) => onTreatmentSelect(e.target.value)}
      />
      <label
        htmlFor={id}
        className="block cursor-pointer select-none rounded-xl py-4 pl-4 peer-checked:bg-green peer-checked:font-semibold peer-checked:text-white peer-hover:bg-beige peer-checked:hover:bg-green"
      >
        {behandling}
      </label>
    </div>
  );
}

export default Radio;
