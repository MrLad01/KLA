import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Nav from "./layout/Nav"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Nav />}>
            
          </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
