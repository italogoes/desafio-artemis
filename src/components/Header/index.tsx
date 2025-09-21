import style from './style.module.css'

const HeaderComponent = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className="content-header">
          <div className={style.logo}>
            <h1>BuscaHub</h1>
          </div>

          <div className="menu">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent