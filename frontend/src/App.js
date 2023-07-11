import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Dashboard from "./components/Dashboard";
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
          element={<Dashboard />}
        />
        <Route
          path="/edit/:id"
          element={<EditBook />}
        />
        <Route
          path="/add-book"
          element={<AddBook />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
