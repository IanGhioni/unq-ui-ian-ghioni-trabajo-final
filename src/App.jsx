import { Route, Routes } from 'react-router'
import { MainPage } from './pages/MainPage'
import { PlayPage } from './pages/PlayPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/play" element={<PlayPage />} />
    </Routes>
  )
}

export default App
