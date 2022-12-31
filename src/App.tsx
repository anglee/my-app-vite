import { HashRouter, Route, Routes } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import PersonDetailsPage from './pages/PersonDetailsPage/PersonDetailsPage';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col antialiased">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/people/:id" element={<PersonDetailsPage />} />
        </Routes>
        <AppFooter />
      </div>
    </HashRouter>
  );
}

export default App;
