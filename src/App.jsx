import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About'
import LogoLoader from './assets/logoLoader'
import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects'


function App() {
  const [loading, Setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      Setloading(false);
    }, 1000);
  }, []);




  return (
    <>
  
      <NavBar />  
      <Routes>
        <Route path='/' element={loading ? <LogoLoader /> : <div><Main/> </div>}/> 
        <Route path='/about' element={loading ? <LogoLoader /> : <div><About/> </div>}/> 
        <Route path='/projects' element={loading ? <LogoLoader /> : <div><Projects/> </div>}/> 
      </Routes>
     
      <Footer />
    </>
  )
}

export default App
