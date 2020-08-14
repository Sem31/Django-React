import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import CustomLayout from './containers/Layout';
import BaseRouter from './routers'

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
