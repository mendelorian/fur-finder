import { useState } from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import Login from './pages/Login'
import { Routes, Route } from 'react-router'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App;
