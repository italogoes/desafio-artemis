import './App.css'
import ResultRepositoriesComponent from './components/ResultRepositories';
import SearchRepositoriesComponent from './components/SearchRepositories';

function App() {
  return(
    <div>
      <SearchRepositoriesComponent/>
      <ResultRepositoriesComponent/>
    </div>
  )
}

export default App