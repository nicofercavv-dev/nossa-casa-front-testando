import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToDo } from './pages/todo/todo-page'
import { WorkshopList } from './pages/workshop/index'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} exact />
        <Route path="/workshops" element={<WorkshopList/>} />
      </Routes>
    </BrowserRouter>
  )
}
