import './index.css'
import { Outlet } from "react-router-dom";
import Rodape from './components/footer/Footer.jsx';

export default function App() {
  

  return (
    <>
    <div className={style.container}>

   
     <Outlet />
     <Rodape />
     </div>
    </>
  )
}

