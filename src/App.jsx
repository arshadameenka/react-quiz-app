import { useEffect, useState } from 'react'
import Difficulty from './components/Difficulty'
import './App.css'
import { Typography } from '@mui/material'

function App() {
  return (
 <div className="w-full h-screen bg-gray-600">
    <div className='container mx-auto'>
      <Typography variant='h2' gutterBottom>Quiz App</Typography>
      <Difficulty />
    </div>

 </div>
  )
 
}

export default App
