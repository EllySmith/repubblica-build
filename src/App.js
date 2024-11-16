import './App.css';
import ArticleBox from './Components/ArticleBox';
import Header from './Components/Header'
import MainTitle from './Components/MainTitle';
import NavigationBox from './Components/NavigationBox';

function App() {
  return (
    <div className='font-eugenio'>
      <MainTitle />
      <Header />
      <div className='flex m-4 border-2 border-black'> <ArticleBox />
      <NavigationBox />
      </div>
      </div>
  );
}

export default App;
