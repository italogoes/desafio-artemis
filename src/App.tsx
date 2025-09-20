import './App.css'
import HeaderComponent from './components/Header';
import ResultRepositoriesComponent from './components/ResultRepositories';
import SearchRepositoriesComponent from './components/SearchRepositories';

function App() {
  return(
    <div>
      <HeaderComponent/>
      <SearchRepositoriesComponent/>
      <ResultRepositoriesComponent/>
    </div>
  )
}

export default App