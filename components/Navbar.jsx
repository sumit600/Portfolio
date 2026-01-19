import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-40 bg-black-90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-center items-center py-5 mx-auto '>
              <a className='text-neutral-400 font-bold text-xl hover:text-white transition-colors' href="/">home</a>
            </div>

        </div>
    </header>
  )
}

export default Navbar