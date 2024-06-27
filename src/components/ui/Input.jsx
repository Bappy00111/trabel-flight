import React,{forwardRef} from 'react'

function Input({label="", type="", placeholder='', ...props},ref) {
  return (
    <div className="form-control">
    <label className="label">
      <span className="label-text text-sm text-gray-800 font-bold">{label}</span>
    </label>
    <input
       {...props}
     ref={ref}
      type={type}
      placeholder={placeholder}
      className="input input-bordered bg-[#eff6ff] border-none h-10"
      required
    />
  </div>
  )
}

export default forwardRef(Input)

