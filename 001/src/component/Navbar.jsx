import React from 'react';
import './../index.css';
import NavButton from './NavButton';

const Navbar = () => {
     return (
          <>
               <div className='flex justify-between bg-neutral-800 h-28'>
                    <div className='text-6xl text-white mt-3 ml-8'>
                         <a href=''>Logo</a>
                    </div>
                    <div className='text-white text-3xl mt-8'>
                         <NavButton component='Home'/>
                         <NavButton component='Tasks'/>
                         <NavButton component='Logout'/>
                    </div>
               </div>
          </>
     )
}

export default Navbar