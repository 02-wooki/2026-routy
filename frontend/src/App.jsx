import { useState } from 'react'
import FeedPage from './pages/FeedPage'
import ExplorePage from './pages/ExplorePage'
import LoginPage from './pages/LoginPage'
import CreateRoutePage from './pages/CreateRoutePage'
import RouteDetailPage from './pages/RouteDetailPage'
import Layout from './components/common/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/create" element={<CreateRoutePage />} />
          <Route path="/detail/:id" element={<RouteDetailPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
