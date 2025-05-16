import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'

function App() {
    const [modelIsVisible, setModelIsVisible] = useState(false);

    function showModelHandler() {
        setModelIsVisible(true);
    }

    function hideModelHandler() {
        setModelIsVisible(false);
    }
  return (
  <>
  <MainHeader onCreatePost={showModelHandler}/>
  <PostsList isPosting={modelIsVisible} onStopPosting = {hideModelHandler}/>
  </>
  ); 
}

export default App
