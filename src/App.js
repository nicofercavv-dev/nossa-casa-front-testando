import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToDo } from './pages/todo/todo-page'
import { HomePage } from './pages/home/index'
import { PageTherapies } from './pages/pageTherapies'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/home" element={<ToDo/>} />
        <Route path="/pageTherapies" element={<PageTherapies/>} />
      </Routes>
    </BrowserRouter>
  )
}
