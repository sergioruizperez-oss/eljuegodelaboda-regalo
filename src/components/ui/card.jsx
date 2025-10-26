import React from 'react'
export function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-transparent bg-white shadow ${className}`}>{children}</div>
}
export function CardContent({ className = '', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
export default Card
