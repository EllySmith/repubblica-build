import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function HeaderMenuCategory({ item }) {
  const navItems = useSelector((state) => state.content.sideBar);
  const menuItems = item.name === 'Sezioni' ? navItems : item.contents;
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block group">
      <button
        onClick={handleClick}
        className="text-black font-bold py-2 px-4 hover:bg-black hover:text-white transition duration-300"
      >
        {item.name}
      </button>

      <div
        className={`absolute left-0 top-full 
        ${item.name === 'Sezioni' ? 'w-96' : 'w-64'} 
        bg-white text-black border border-black shadow-lg z-50 
        ${isOpen ? 'block' : 'hidden'}`}
        onMouseLeave={() => isOpen && setIsOpen(false)} 
      >
        <ul className={`py-2 grid 
          ${item.name === 'Sezioni' ? 'grid-cols-3' : 'grid-cols-1'} 
          gap-2`}>
          {menuItems.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
              <a href={item.link}>{item.category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenuCategory;
