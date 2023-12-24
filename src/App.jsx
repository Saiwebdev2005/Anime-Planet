import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RouteWrap from "./components/Other/RouteWrap"
import Contact from "./components/Pages/Contact"
import Landing from "./components/Pages/Landing"
import Main from "./components/Pages/Main"

const router = createBrowserRouter([
  {path:'/',
 element:<RouteWrap/>,
 children:[
  {index:true,element:<Landing/>},
  {path:'/Main',element:<Main/>},
  {path:'/Contact',element:<Contact/>}
 ]
}
])

function App() {



  return <RouterProvider router={router}/>
  
}

export default App
