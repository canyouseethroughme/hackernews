import React, { useEffect } from 'react';
import { getNewsIds } from './services/news';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    getNewsIds();
  }, []);

  return (
    <div className="App">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
