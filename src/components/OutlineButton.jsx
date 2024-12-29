import React from 'react'
import { LuArrowLeft } from 'react-icons/lu'

const OutlineButton = ({children}) => {
  return (
    <button className=' border text-neutral-900 border-moana-400 px-8 py-2 inline-flex items-center gap-2 rounded-bl-3xl rounded-tr-3xl    '> <LuArrowLeft/> {children}</button>
  )
}

export default OutlineButton