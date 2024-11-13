import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={`app_container ${showLinks ? "show_nav" : ""}`}>
      <Navbar handleShowLinks={handleShowLinks} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
