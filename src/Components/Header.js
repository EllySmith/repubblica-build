import React from 'react'
import HeaderMenuCategory from './HeaderComponents.js/HeaderMenuCathegory'
import HeaderMenuBreaking from './HeaderComponents.js/HeaderMenuBreaking'

function Header() {
  const articles = ['Sezioni', 'Edizioni Locali', 'Il Quotidiano', 'Servizi', 'A-Z']
  const breaking = ['Regionnali - Poggio Mirteto', 'Ucraina', 'Israele', 'Roma:Lazio - 4:0', 'Elon Musk ha detto le cose']
  return (
    <div>
      <div className='flex justify-center space-x-4 my-4 font-eugenio font-bold'>
        {articles.map((article) => <HeaderMenuCategory item={article} />)}
      </div>

      <div className='flex justify-center items-center space-x-4 my-4 bg-gray-200 h-[5vh] border-t-2 border-b-2 border-black font-eugenio'>
        {breaking.map((article) => <HeaderMenuBreaking item={article} />)}
      </div>

    </div>

  )
}

export default Header
