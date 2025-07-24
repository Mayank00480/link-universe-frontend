import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
function App() {


  return (
    <>
    <BrowserRouter basename='/'>
    
    </BrowserRouter>
      <NavBar/>
      <Footer/>
    </>
  )
}

export default App
