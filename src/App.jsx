import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home";
import Timeline from "./Pages/Timeline";
import Stats from "./Pages/Stats";
import FriendDetails from "./Pages/FriendDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
      </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;