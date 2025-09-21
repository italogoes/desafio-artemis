import { useEffect, useState } from "react";
import { octokit } from "../../config/octokit";
import { CiSearch } from "react-icons/ci";
import style from './style.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setRepos } from "../../store/features/repos";
import { setLoading } from "../../store/features/loading";
import { setPage } from "../../store/features/page";
import type { RootState } from "../../store/store";
import { setTotalPages } from "../../store/features/totalPages";

const SearchRepositoriesComponent = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page.value)
  const filters = useSelector((state: RootState) => state.filters.value)
  const [repoSearch, setRepoSearch] = useState<string>("");
  const [isValidName, setIsValidName] = useState<boolean>(true)
  const perPage = 6;

  useEffect(() => {
    if (!repoSearch || repoSearch === "") {
      dispatch(setLoading(false));
      dispatch(setRepos([]));
      dispatch(setTotalPages(1));
      return;
    }

    dispatch(setLoading(true));

    // Aqui eu adicionei um tecnica chamada Debounce para esperar o usuário teminar de digitar e evitar sobrecarregar o servidor.
    const timeOut = setTimeout(async () => {
      try {
        const response = await octokit.request("GET /search/repositories", {
          q: `${repoSearch} in:name`,
          per_page: perPage,
          page: page,
          sort: filters
        });

        if(response.data.items.length === 0) {
          setIsValidName(false)
        } else {
          setIsValidName(true)
        }

        dispatch(setRepos(response.data.items));

        const totalCount = response.data.total_count
        dispatch(setTotalPages(Math.ceil(totalCount / perPage)))

        dispatch(setLoading(false));
      } catch (error) {
        alert("Erro ao acessar repositórios, verifique a sua chave de acesso pessoal do github. No readme desse projeto, há instruções de como gerar sua chave pessoal.")
        console.log(error);
        dispatch(setLoading(false));
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [dispatch, repoSearch, page, filters]);

  const handleSearchChange = (value: string) => {
    setRepoSearch(value);
    dispatch(setRepos([]));
    dispatch(setPage(1));
  };

  return (
    <div className={style.main}>
      <div className="container">
        <h1 className={style.title}>Encontre repositórios do GitHub em segundos</h1>

        <div className={style.box_search}>
          <CiSearch className={style.icon} />
          
          <input 
            className={style.search} 
            placeholder="Nome do repositório" 
            type="text" 
            onChange={(e) => handleSearchChange(e.target.value)} 
          />
        </div>

        {!isValidName && (
          <div>
            <p className={style.title_erro}><span>"{repoSearch}"</span> não encontrado, tente novamente.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchRepositoriesComponent;
