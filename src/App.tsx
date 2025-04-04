import {  createBrowserRouter, Route,createRoutesFromElements,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import SearchResults from "./pages/SearchResults";
 function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>} >
          <Route path="/" element={<Home/>} />             
          <Route path="/search" element={<SearchResults/>} />
      </Route>
    )
  )
  return (
   <RouterProvider router={router}/>
  )
}
export default App


