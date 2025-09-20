import { useEffect, useState } from "react";
import { octokit } from "../../config/octokit";
import { CiSearch } from "react-icons/ci";
import style from './style.module.css';
import { useDispatch } from "react-redux";
import { setRepos } from "../../store/features/repos";
import { setLoading } from "../../store/features/loading";

const SearchRepositoriesComponent = () => {
  const dispatch = useDispatch()
    const [ repoSearch, setRepoSearch ] = useState<string>("")
  
    useEffect(() => {
      if (!repoSearch) return;

      dispatch(setLoading(true))
  
      const timeOut = setTimeout(async () => {
        try {
          const response = await octokit.request("GET /search/repositories", {
            q: `${repoSearch} in:name`,
            per_page: 10,
          });
  
          dispatch(setRepos(response.data.items))
          
          dispatch(setLoading(false))
        } catch (error) {
          console.log(error)
        }
      }, 1000);

      return () => clearTimeout(timeOut)
    }, [dispatch, repoSearch])
    
    return (
      <div className={style.main}>
        <div className="container">
          <h1 className={style.title}>Encontre repositórios do GitHub em segundos</h1> 

          <div className={style.box_search}>
            <CiSearch className={style.icon} />
            <input className={style.search} name="search" placeholder="Nome do repositório" type="text" onChange={(e) => setRepoSearch(e.target.value)}/>
          </div>

          
        </div>
      </div>
    )
}

export default SearchRepositoriesComponent