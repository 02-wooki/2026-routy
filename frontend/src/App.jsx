import { useState } from 'react'
import FeedPage from './pages/FeedPage'
import ExplorePage from './pages/ExplorePage'
import LoginPage from './pages/LoginPage'
import CreateRoutePage from './pages/CreateRoutePage'
import RouteDetailPage from './pages/RouteDetailPage'
import Layout from './components/common/Layout'
import { useAuthStore } from './store/useSocialStore'

function App() {
  const { isAuthenticated } = useAuthStore()
  const [currentPage, setCurrentPage] = useState('routes')
  const [selectedRouteId, setSelectedRouteId] = useState(null)

  // 로그인하지 않은 경우 로그인 페이지 표시
  if (!isAuthenticated) {
    return <LoginPage />
  }

  const handleViewRoute = (id) => {
    setSelectedRouteId(id)
    setCurrentPage('detail')
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'routes':
        return <FeedPage onAddRoute={() => setCurrentPage('create')} onViewRoute={handleViewRoute} />
      case 'explore':
        return <ExplorePage onViewRoute={handleViewRoute} />
      case 'create':
        return <CreateRoutePage onBack={() => setCurrentPage('routes')} />
      case 'detail':
        return selectedRouteId ? (
          <RouteDetailPage routeId={selectedRouteId} onBack={() => setCurrentPage('routes')} />
        ) : (
          <FeedPage onAddRoute={() => setCurrentPage('create')} onViewRoute={handleViewRoute} />
        )
      default:
        return <FeedPage onAddRoute={() => setCurrentPage('create')} onViewRoute={handleViewRoute} />
    }
  }

  return (
    <Layout 
      currentPage={currentPage === 'create' || currentPage === 'detail' ? 'routes' : currentPage} 
      onPageChange={setCurrentPage}
    >
      {renderContent()}
    </Layout>
  )
}

export default App
