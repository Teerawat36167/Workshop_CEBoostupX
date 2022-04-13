import React from 'react';
import './../index.css';

const Navbar = () => {
     return (
          <>
               <div className='flex justify-between bg-stone-800 h-24'>
                    <div className='text-6xl text-white'>
                         <a href='google.com'>Logo</a>
                    </div>
                    <div className='text-white text-3xl mt-4'>
                         <a href='google.com' className='px-10'>Home</a>
                         <a href='google.com' className='px-10'>Tasks</a>
                         <a href='google.com' className='px-10'>Logout</a>
                    </div>
               </div>
          </>
     )
}

export default Navbar