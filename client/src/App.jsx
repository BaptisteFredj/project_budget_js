import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [auth, setAuth] = useState();
  return (
    <>
      <Navbar authTools={{ auth, setAuth }} />
      <main>
        <Outlet context={{ auth, setAuth }} />
      </main>
    </>
  );
}

export default App;
