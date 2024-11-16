import './App.css';
import ArticleBox from './Components/ArticleBox';
import Header from './Components/Header'
import MainTitle from './Components/MainTitle';
import NavigationBox from './Components/NavigationBox';

function App() {
  return (
    <div>
      <MainTitle />
      <Header />
      <div className='flex'> <ArticleBox />
      <NavigationBox />
      </div>
      </div>
  );
}

export default App;
