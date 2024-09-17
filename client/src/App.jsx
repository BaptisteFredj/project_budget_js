import { Outlet } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState();
  return (
    <main>
      <Outlet context={{ user, setUser }} />
    </main>
  );
}

export default App;
