import { HashRouter, Route, Routes } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import Welcome from './Welcome';

function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col antialiased">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
        <AppFooter />
      </div>
    </HashRouter>
  );
}

export default App;
