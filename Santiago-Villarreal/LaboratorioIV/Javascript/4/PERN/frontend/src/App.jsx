import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import TareasPage from "./pages/TareasPage"
import TareasFormPage from "./pages/TareaFormPage"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <Routes>
      <Route path= "/" element = {<HomePage/>}/>
      <Route path= "/about" element = {<AboutPage/>}/>
      <Route path= "/login" element = {<LoginPage/>}/>
      <Route path= "/register" element = {<RegisterPage/>}/>
      <Route path= "/profile" element = {<ProfilePage/>}/>
      <Route path= "/tareas" element = {<TareasPage/>}/>
      <Route path= "/tareaFormPage" element = {<TareasFormPage/>}/>
      <Route path= "*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App