import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Header from "./components/header/Header";



export default function App(){

  return (
    <>
        <Toaster />
        <Header />
        <Outlet/> 
        
    </>
  )
}