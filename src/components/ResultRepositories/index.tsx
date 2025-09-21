/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";
import type { RootState } from "../../store/store";
import style from './style.module.css';
import { useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { setPage } from "../../store/features/page";

const ResultRepositoriesComponent = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state: RootState) => state.repos.value)
    const loading = useSelector((state: RootState) => state.loading.value)
    const page = useSelector((state: RootState) => state.page.value)
    const totalPages = useSelector((state: RootState) => state.totalPages.value)

    function date(value: string){
        return new Date(value)
    }

    useEffect(() => {
        console.log(repos);
        
    }, [repos])

    return (
        <div>
            <div className="container">
                <div className={style.content_repos}>
                    {loading ?
                        <div className={style.loader}>
                            <SyncLoader color="#6b00d6" />
                        </div>
                        :
                        repos.map((repo: any) => (
                            <div key={repo.id} className={style.repos_single}>
                                <a className={style.link_repo} href={repo.html_url} target="_blank">
                                    <div>
                                        <h2 className={style.name_repo}>{repo.name}</h2>
                                        <p className={style.desc_repo}><span>Descrição:</span> {repo.description}</p>
                                        <p className={style.stars_repo}><FaRegStar color="#ffb703" /> {repo.stargazers_count}</p>
                                        <p className={style.att_repo}><span>Útima atualização:</span> {date(repo.updated_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
                                    </div>
                                </a>    
                            </div>
                        ))
                    }
                </div>

                {repos.length != 0 && (
                    <div className={style.pagination}>
                        <button 
                        className={style.btn_pagination}
                        onClick={() => dispatch(setPage(page - 1))}
                        disabled={page === 1}
                        >
                        Anterior
                        </button>

                        <span>Página {page} de {totalPages}</span>

                        <button
                        className={style.btn_pagination} 
                        onClick={() => dispatch(setPage(page + 1))}
                        disabled={page === totalPages}
                        >
                        Próxima
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResultRepositoriesComponent