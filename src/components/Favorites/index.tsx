import { useEffect, useState } from "react";
import type { Repo } from "../../interfaces/IRepo";
import { FaRegStar } from "react-icons/fa";
import style from './style.module.css'

const FavoritesComponent = () => {
    const [favorites, setFavorites] = useState<Repo[]>([]);

    function getFavorites(): Repo[] {
        const stored = localStorage.getItem("favoritos");
        return stored ? JSON.parse(stored) : [];
    }

    useEffect(() => {
        setFavorites(getFavorites())
    }, []);

    function date(value: string) {
        return new Date(value)
    }

    function removeFavorite(id: number) {
        const stored = localStorage.getItem('favoritos')
        const favorites: Repo[] = stored ? JSON.parse(stored) : []

        const updated = favorites.filter(repo => repo.id !== id)

        localStorage.setItem("favoritos", JSON.stringify(updated))

        setFavorites(getFavorites())

        alert("Favorito removido.")
    }

    return (
        <div>
            <div className="container">
                <div className={style.title}>
                    <h1>Meus Favoritos:</h1>
                </div>

                <div className={style.content_repos}>
                    {favorites.map((repo: Repo) => (
                        <div key={repo.id} className={style.repos_single}>
                            <a className={style.link_repo} href={repo.html_url} target="_blank">
                                <div>
                                    <h2 className={style.name_repo}>{repo.name}</h2>
                                    <p className={style.desc_repo}><span>Descrição:</span> {repo.description}</p>
                                    <p className={style.stars_repo}><FaRegStar color="#ffb703" /> {repo.stargazers_count}</p>
                                </div>

                                <p className={style.att_repo}><span>Útima atualização:</span> {date(repo.updated_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
                            </a>
                            <button onClick={() => removeFavorite(repo.id)} className={style.btn_remove}>Remover</button>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FavoritesComponent