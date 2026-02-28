import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RequestsProvider } from './context/RequestsContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { CreateRequest } from './pages/CreateRequest';

// Main App component
// WHY: Sets up routing, context providers, and consistent layout
function App() {
  return (
    <RequestsProvider>
      <Router>
        <div className="min-h-screen bg-black flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateRequest />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RequestsProvider>
  );
}

export default App;
