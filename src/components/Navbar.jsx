import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  
 //using inline function and logical NOT (!) to toggle state
 const [toggleMenu, setToggleMenu] = useState(true);
 return (
<header className="flex flex-wrap  sm:justify-start sm:flex-nowrap z-50  w-full bg-white text-sm pb-2 dark:bg-gray-800">
<nav className=" p-4 w-full bg-black text-white mx-auto px-8 sm:flex sm:items-center sm:justify-between " >
  <div className="flex items-center justify-between">
    <a className="inline-flex items-center gap-x-2 text-xl font-bold dark:text-white" href="#">
      <img className="w-10 h-auto" src="https://images.unsplash.com/photo-1460134583608-5f5d1dd1d61c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt=" pizzaLogo"/>
      Novo pizza
    </a>
{/* Mobile navigation toggle */}
    <div className="sm:hidden " >
    <button   onClick={() => setToggleMenu(!toggleMenu)} type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2" aria-label="Toggle navigation">
        <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      {toggleMenu && (

      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
      <a className="font-medium text-white" href="/" aria-current="page">Home</a>
      <a className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="menu">Menu</a>
      <a className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="cart">Cart</a>
      <a className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="login">Login</a>
    </div>
)}
</div>
</div>
   {/* primary */}
  <div id="navbar__main" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
    <div className="flex flex-col gap-5 mt-5 p-8   sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
      <a className="font-medium text-white" href="/" >Home</a>
      <a className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="menu">Menu</a>
      <a className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="cart">cart</a>
      <a className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="login">Login</a>
    </div>
  </div>
</nav>
</header>


  )
}

export default Navbar