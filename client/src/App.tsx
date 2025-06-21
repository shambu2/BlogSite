// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import './App.css'
// import SignupForm from './pages/signup'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import BlogeditPage from './pages/BlogeditPage'
import BlogidPage from './pages/BlogidPage'
// import Home from './pages/home'
// import Home from './pages/home'

function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/blog/id" element={<BlogidPage/>} />
         <Route path='/blog' element={<BlogeditPage/>}/>
         <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </div>
  )
}

export default App
