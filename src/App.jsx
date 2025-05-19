import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './components/landing-page/LandingPage'
import Signin from './components/signin/Signin'
import Signup from './components/signup/signup'
import NoPage from './components/nopage/NoPage';



function App() {
  return (
    <>
      <BrowserRouter>
	    <Routes>
        <Route path={"/"} index element={<LandingPage />} />
        <Route path={"landing"} index element={<LandingPage/>} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
