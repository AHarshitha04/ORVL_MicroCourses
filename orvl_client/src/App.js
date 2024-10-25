import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import OrvlMicroCoursesDashboard from './components/orvl_microcoursescomponents/OrvlMicroCoursesDashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
    <Route path = '/' element={<OrvlMicroCoursesDashboard/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
