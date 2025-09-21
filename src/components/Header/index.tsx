import { NavLink } from 'react-router'
import style from './style.module.css'

const HeaderComponent = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.content_header}>
          <div className={style.logo}>
            <h1>BuscaHub</h1>
          </div>

          <div className={style.menu}>
            <nav>
              <NavLink to='/'>Início</NavLink>
              <NavLink to='/favoritos'>Meus favoritos</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent