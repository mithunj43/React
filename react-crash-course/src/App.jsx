import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/post'

function App() {

  return (
  <>
    <Post author ="Mithun" body ="React.js is awesome"/>
    <Post author ="Pooja" body ="Check out the full course"/>
  </>
  ); 
}

export default App
