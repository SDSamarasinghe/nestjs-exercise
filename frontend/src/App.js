import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddBook from "./components/AddBook";

import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        {/* Ads Routes */}
        <Route
          path="/"
          element={<AddBook />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
