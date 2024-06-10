import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/movie/HomePage'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PrivateRoute element={<HomePage />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
