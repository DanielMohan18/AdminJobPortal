import React from 'react'


const InputField = ({ label, value }) => (
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-gray-700 text-sm">{label}</label>
      <input 
        type="text" 
        value={value} 
        readOnly 
        className="w-full border border-gray-300 rounded-lg shadow-sm p-2 bg-gray-50 cursor-not-allowed select-none"
        onMouseDown={(e) => e.preventDefault()} 
      />
    </div>
  );


export default InputField;
