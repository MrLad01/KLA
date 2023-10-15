import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Nav from "./layout/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path = "/" element = { <Nav /> }>
            <Route index element = { <Home /> } />
            <Route path = "about" element = { <About /> } />
            <Route path = "contact" element = { <Contact /> } />
          </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router = { router }  />
    </>
  )
}

export default App
