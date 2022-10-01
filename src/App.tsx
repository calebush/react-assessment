import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./features/events/LandingPage";
import CreateEvent from "./features/events/CreateEvent";
import Events from "./features/events/Events";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<LandingPage />} />
          <Route path= "/create" element={<CreateEvent />} />
          <Route path= "/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
