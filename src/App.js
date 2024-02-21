import React from 'react';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import Portfolio from './component/Portfolio/Portfolio';


let routers = createBrowserRouter([
  {path :'' , element: <Layout/> ,
   children :[
    {index: true , element: <Home/>},
    {path :'portfolio', element: <Portfolio/>},
    {path : 'contact' , element: <Contact/>},
    {path : 'about' , element: <About/>},
  ]}
])

export default function App() {
 
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
