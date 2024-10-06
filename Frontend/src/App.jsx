import React,{ useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'



function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet/>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default App
