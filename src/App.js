import './App.css';
import { useState } from 'react';
import { Menu } from 'lucide-react'
import ArticleBox from './Components/ArticleBox/ArticleBox';
import Header from './Components/HeaderComponents/Header'
import MainTitle from './Components/HeaderComponents/MainTitle';
import NavigationBox from './Components/NavigationBox/NavigationBox';
import Modal from './Components/Modal/Modal';


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-eugenio">
      <MainTitle />
      <Header />
      <div className="lg:flex block mx-2 lg:m-4 border-2 border-black">
        <ArticleBox />
        <NavigationBox isMobileMenuOpen={isMobileMenuOpen} />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed bottom-4 right-4 bg-black text-white p-2 rounded-full shadow-lg"
        >
          <Menu size={24} />
        </button>
      </div>
      <Modal />
    </div>
  );
}

export default App;
