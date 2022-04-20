import React from 'react'

const Box = (props) => {

     const {title} = props

     return (
          <div className='bg-slate-200 rounded-3xl h-44 w-80 ml-9 text-center py-[70px] text-3xl'>{title}</div>
     )
}

export default Box