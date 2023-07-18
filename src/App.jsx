import { Router as BrowserRouter,Routes,Route} from "react-router-dom"
import { Login } from "./pages/login-page"
import { Home } from "./pages/home-page"

export const App=()=>{

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home  />} />
      </Routes>
  )
}

