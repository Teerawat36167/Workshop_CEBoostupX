import React from 'react'

const NavButton = (props) => {
     return (
          <>
               <a href='' className='px-10 py-3 mr-2 hover:bg-neutral-600 rounded-lg'>{props.component}</a>
          </>
     )
}

export default NavButton