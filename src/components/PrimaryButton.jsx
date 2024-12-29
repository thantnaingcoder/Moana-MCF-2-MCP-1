import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
const PrimaryButton = ({children}) => {
  return (
    <button className=' btn-gradient text-white px-8 py-2 inline-flex items-center gap-2 rounded-bl-3xl rounded-tr-3xl    '>{children} <LuArrowRight/></button>
  )
}

export default PrimaryButton