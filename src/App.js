import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ResetPassword from "./pages/ResetPassword.js"
import ForgotPassword from "./pages/ForgotPassword.js"
import Login from "./pages/Login.js"
import Register from "./pages/Register.js"
import MainPage from "./pages/MainPage.js"
import ViewMail from "./pages/ViewMail.js"



function App() {
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/forgot-password" Component={ForgotPassword} />
      <Route path="/api/v1/reset_password/:id/:token" Component={ResetPassword} />
      <Route path="/mail/:type" Component={MainPage} />
      <Route path='mail/view/:id' Component={ViewMail} />
    </Routes>
    </BrowserRouter>
  )
}

export default App