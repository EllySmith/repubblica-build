import React, { useState } from 'react';

function HeaderMenuCategory({ item }) {
  const menuItems = ['One', 'Two', 'Tree', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'One', 'Two', 'Tree', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
  const columns = menuItems.length > 10 ? 'grid-cols-2' : '';
  const width = menuItems.length > 10 ? 'w-64' : 'w-32';

  return (
    <div className="relative inline-block group">
      <button
        className="text-black font-bold py-2 px-4 hover:bg-black hover:text-white transition duration-300"
      >
        {item}
      </button>

      <div className={`absolute left-0 top-full mt-2 ${width} bg-white text-black border border-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50`}>
      <ul className={`py-2 grid ${columns} gap-2`}>
          {menuItems.map((item) => (<li className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer">{item}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenuCategory;
