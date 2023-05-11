import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToDo } from './pages/todo/todo-page'
import { HomePage } from './pages/home/index'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/home" element={<ToDo/>} />
      </Routes>
    </BrowserRouter>
  )
}
