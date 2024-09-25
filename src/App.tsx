import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './Styles/Pages.css'

import Handbook from './Handbook';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:pageId" element={<Handbook />} />
          <Route path="/" element={<Handbook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
