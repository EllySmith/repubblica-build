import React, { useState } from 'react';
import HeaderMenuCategory from './HeaderMenuCathegory';
import HeaderMenuBreaking from './HeaderMenuBreaking';
import { useSelector } from 'react-redux';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerMenuItems = useSelector((state) => state.content.headerMenuItems);
  const breaking = useSelector((state) => state.content.menuItems);

  return (
    <div className="border-b border-black">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden w-full text-left p-4 bg-gray-100"
      >
        Menu
      </button>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block relative`}>
        <div className="lg:flex flex-wrap justify-center space-y-2 lg:space-y-0 lg:space-x-4 my-4 font-bold z-0">
          {headerMenuItems.map((item, index) => (
            <HeaderMenuCategory key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Breaking news section */}
      <div className="overflow-y-scroll  bg-gray-200 border-t-2 border-b-2 border-red-700 px-4 mb-2">
        <div className="flex flex-row justify-start lg:justify-center items-center">
          {breaking.map((article, index) => (
            <div className="w-auto sm:w-auto md:w-1/3 lg:w-auto mb-2" key={index}>
              <HeaderMenuBreaking item={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
