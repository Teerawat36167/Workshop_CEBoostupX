import React from 'react'
import Box from './Box'

const GridBox = (props) => {

     const {data} = props

     return (
          <div className='grid grid-cols-4 gap-16 m-16'>
               {Object.values(data).map((title , index) => {
                    return <Box key={index} {...title} />
               })}
          </div>
     )
}

export default GridBox