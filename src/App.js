import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import './App.css';
import { Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext';

function App() {
  
  return (
      <GifsContextProvider>
        <section className="App-content">
          <Route path='/' component={Home}/>
          <Route path='/gifs/:keyword' component={SearchResults}/>
          <Route path='/detail/:id' component={Detail}/>
        </section>
      </GifsContextProvider>
  );
}

export default App;
