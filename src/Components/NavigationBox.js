import React from 'react';
import NavigationItem from './NavigationBox/NavigationItem';

function NavigationBox({ isMobileMenuOpen }) {
  const veryImportantSide = ['Economia', 'Politica', 'Arte', 'Calcio', 'Proteste', 'Roma', 'Clima'];
  
  return (
    <div
      className={`
        lg:w-1/6 w-full
        lg:relative lg:block
        ${isMobileMenuOpen ? 'fixed bottom-0 left-0 right-0' : 'hidden'}
        lg:static lg:border-l-2 border-black 
        bg-white shadow-lg lg:shadow-none 
        p-4 lg:rounded-none rounded-t-lg
      `}
    >
      {veryImportantSide.map((item, index) => (
        <NavigationItem key={index} item={item} />
      ))}
    </div>
  );
}

export default NavigationBox;
