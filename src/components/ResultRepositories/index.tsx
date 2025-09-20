import { useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";
import type { RootState } from "../../store/store";
import style from './style.module.css';

const ResultRepositoriesComponent = () => {
    const repos = useSelector((state: RootState) => state.repos.value)
    const loading = useSelector((state: RootState) => state.loading.value)

    return (
        <div>
            <div className="container">
                {loading ?
                    <div className={style.loader}>
                        <SyncLoader color="#6b00d6" />
                    </div>
                    :
                    repos.map((repo: any) => (
                        <div>{repo.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default ResultRepositoriesComponent