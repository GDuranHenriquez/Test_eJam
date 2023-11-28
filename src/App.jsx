import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import WaitYourOrdersPages from './pages/WaitYourOrder/WaitYourOrderPage'

function App() {

  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<WaitYourOrdersPages/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
