import { Route } from 'wouter'
import StyledLogoLink from './components/styled/StyledLogoLink'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext'
import './App.css'

function App() {  
  return(
      <div className="App-content">
        <StyledLogoLink  to="/">GIFFINDOR</StyledLogoLink>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </div>
  )
}

export default App
