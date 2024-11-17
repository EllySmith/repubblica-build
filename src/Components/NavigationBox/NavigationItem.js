import React from 'react';
import { useSelector } from 'react-redux';

function NavigationItem() {
  const items = useSelector((state) => state.content.sideBar);

  return (
    <div>
      {items.map((menuItem, index) => (
        <a
          key={index}
          href={menuItem.link}
          className="block border-b-2 py-2 font-bold hover:text-4xl transition-colors h-16 text-xl align-baseline"
        >
          {menuItem.category}
        </a>
      ))}
    </div>
  );
}

export default NavigationItem;

