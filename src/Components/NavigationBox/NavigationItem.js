import React from 'react';
import { useSelector } from 'react-redux';

function NavigationItem({ item }) {

  return (
    <div>
          <a
            key={item.index}
            href={item.link}
            className="block border-b-2 py-2 font-bold hover:text-3xl transition-colors h-20 text-xl align-baseline"
          >
            {item.category}
          </a>
    </div>
  );
}

export default NavigationItem;
