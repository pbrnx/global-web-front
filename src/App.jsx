import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape"

export default function App(){

  return (
    <>
     
       
        <Cabecalho/>
        
        
        <Outlet/>


        <Rodape/>
    
      
    </>
  )
}