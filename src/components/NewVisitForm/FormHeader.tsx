import React from 'react'
import BackButton from '../BackButton'
import SaveVisitButton from './SaveVisitButton'

const FormHeader = () => {
  return (
    <div className="flex flex-row items-center justify-around p-4 m-auto max-w-screen-sm">
                <div className="flex-1">
                    <BackButton />
                </div>
                <h1 className="font-black">New Visit</h1>
                <div className="flex-1 justify-end flex">
                    <SaveVisitButton />
                </div>
            </div>
  )
}

export default FormHeader