import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { navLinks } from '../contexts';

const Navbar = () => {
  

  const [isopen, setisopen] = useState(false);

  const NavItems = () =>{
    return(
      <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
          {navLinks.map(({id,href,Navname})=>(
            <li key={id} className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
              <a  href={href} className='text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5' onClick={()=>{}} >{Navname}</a>
            </li>
          ))}

      </ul>
    )
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-40 bg-black-90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 sm:px-10 px-5  '>
              <a className='text-neutral-400 font-bold text-xl hover:text-white transition-colors' href="/">Sumit-dev</a>
              <button className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' onClick={()=>{setisopen(!isopen)}}>
                {
                  isopen ? <i class="ri-close-line text-neutral-400 font-bold text-xl hover:text-white transition-colors"></i>:
                  <i className="ri-menu-line text-neutral-400 font-bold text-xl hover:text-white transition-colors "></i>
                }
                
                
                
                </button>
                <nav className='sm:flex hidden '>
                  <NavItems/>
                </nav>
            </div>

        </div>
        <div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block' ${isopen ? 'max-h-screen':'max-h-0'}`}>
          <nav className='p-5'>
                <NavItems/>
             </nav>
        </div>
    </header>
  )
}

export default Navbar