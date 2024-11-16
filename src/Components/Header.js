import React from 'react'
import HeaderMenuCategory from './HeaderComponents.js/HeaderMenuCathegory'

function Header() {
     const articles = ['Sezioni', 'Edizioni Locali', 'Il Quotidiano', 'Servizi', 'A-Z']
  return (
    <div className='flex justify-center space-x-4 my-4'>
      {articles.map((article) => <HeaderMenuCategory item={article}/>)}
    </div>
  )
}

export default Header
