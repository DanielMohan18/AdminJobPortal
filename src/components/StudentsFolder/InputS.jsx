import React from 'react'

const InputS = ({formData,name,placeholder,handleChange}) => {
  return (
    <div>
                  <input
                        name={name}
                        placeholder={placeholder}
                        value={formData}
                        onChange={handleChange}
                        className="border rounded-md p-3 w-full"
                        required
                      />
    </div>
  )
}

export default InputS
