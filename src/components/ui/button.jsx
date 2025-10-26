import React from 'react'
export function Button({ className = '', children, disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
