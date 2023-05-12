import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/index'
import { TherapiesPage } from './pages/therapies'
import EventsPage from './pages/events'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/therapies" element={<TherapiesPage/>} />
        <Route path="/artandculture" element={<TherapiesPage/>} />
        <Route path="/education" element={<TherapiesPage/>} />
        <Route path="/workshops" element={<TherapiesPage/>} />
        <Route path="/projects" element={<TherapiesPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
