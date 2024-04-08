import React from 'react'
import AddVisitButton from './AddVisitButton'

const HeaderCalendar = () => {
  return (
    <div className='flex flex-row p-4 items-center justify-between'>
        <p className="text-sm font-semibold">January 2022</p>
        <AddVisitButton/>
    </div>
    
  )
}

export default HeaderCalendar