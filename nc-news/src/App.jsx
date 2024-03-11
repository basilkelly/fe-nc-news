import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header' 
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'

function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/articles' element={<ArticlesList/>}/>
    </Routes>
    </>
  )
}

export default App
