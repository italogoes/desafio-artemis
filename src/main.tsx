import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import { Provider } from 'react-redux'
import {store} from './store/store.ts'
import HeaderComponent from './components/Header/index.tsx';
import FavoritesComponent from './components/Favorites/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={ <App/> }/>
          <Route path="/favoritos" element={ <FavoritesComponent/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
