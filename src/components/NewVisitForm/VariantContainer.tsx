import React from 'react'
interface ItemProps {
    children: React.ReactNode
}
const VariantContainer = ({children}: ItemProps) => {
  return (
    <div className="p-2 bg-zinc-100 rounded-md gap-2 flex flex-col">
        {children}
    </div>
  )
}

export default VariantContainer