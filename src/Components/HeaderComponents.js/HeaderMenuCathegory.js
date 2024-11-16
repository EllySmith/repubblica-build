import React, { useState } from 'react';

function HeaderMenuCategory({item}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block group">
      <button
        onClick={handleToggle}
        className=""
        aria-expanded={isOpen}
      >
        {item} ˅
      </button>

      {isOpen && (
      <div className="z-10 absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Menu Item 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Menu Item 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderMenuCategory;
