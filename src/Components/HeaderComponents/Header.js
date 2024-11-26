import React from 'react'
import { useState } from 'react';
import HeaderMenuCategory from './HeaderMenuCathegory'
import HeaderMenuBreaking from './HeaderMenuBreaking'
import { useSelector } from 'react-redux';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerMenuItems = useSelector((state) => state.content.headerMenuItems)
  const breaking = useSelector((state) => state.content.menuItems)
  console.log('headermenu', headerMenuItems);

  return (
    <div className="border-b border-black">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden w-full text-left p-4 bg-gray-100"
      >
        Menu
      </button>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block relative`}>
        <div className="lg:flex flex-wrap justify-center space-y-2 lg:space-y-0 lg:space-x-4 my-4 font-bold z-0">
          {headerMenuItems.map((item, index) => (
            <HeaderMenuCategory key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex whitespace-nowrap justify-start lg:justify-center items-center space-x-4 my-4 bg-gray-200 h-[5vh] border-t-2 border-b-2 border-red-700 px-4">
          {breaking.map((article, index) => (
            <HeaderMenuBreaking key={index} item={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header
