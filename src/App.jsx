import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape"
import style from "./index.css";


export default function App(){

  return (
    <>
     <div className={style.container}>
       
  <Cabecalho/>
        
        
        <Outlet/>


      <Rodape/>
    
      </div> 
    </>
  )
}