import React from 'react'
interface ItemProps {
    children: React.ReactNode
}
const MainContainer = ({children}: ItemProps) => {
  return (
    <main className='container m-auto'>{children}</main>
  )
}

export default MainContainer