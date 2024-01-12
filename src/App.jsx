import './App.css'
import Home from './screens/Home'
import AddClient from './screens/AddClient'
import EditClient from './screens/EditClient'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'

const App = () => {
    return <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agregarCliente' element={<AddClient />} />
      <Route path='/editarCliente/:id' element={<EditClient />} />
      </Routes>
    </Router>
}

export default App