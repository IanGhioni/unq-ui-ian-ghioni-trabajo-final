import { Route, Routes } from 'react-router'
import { MainPage } from './pages/MainPage'
import { PlayPage } from './pages/PlayPage'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/play" element={<PlayPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
