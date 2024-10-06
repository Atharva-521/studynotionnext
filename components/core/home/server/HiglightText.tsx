import React from 'react'

export const HiglightText = ({text} : {text: string}) => {
  return (
    <span className='font-bold text-blue-50 '>
        {" "}{text}{" "}
    </span>
  )
}
