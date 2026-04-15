import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Timeline from "./Pages/Timeline";
import Stats from "./Pages/Stats";
import FriendDetails from "./Pages/FriendDetails";
import Footer from "./components/Footer/Footer";

import AppProvider, { AppContext } from "./context/AppContext";

const AppContent = () => {
  const { toast } = useContext(AppContext);

  return (
    <>

      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded shadow z-50 text-sm">
          {toast}
        </div>
      )}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>

      <Footer />
    </>
  );
};

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
