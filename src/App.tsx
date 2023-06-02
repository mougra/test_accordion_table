import React from 'react'
import Accordion from './components/Accordion'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Aside from './components/Aside'
import Tasks from './pages/Tasks'
import Header from './components/Header'
import './styled/global.scss'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main-screen'>
        <Aside />
        <Routes>
          <Route path='/' element={<Tasks />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
