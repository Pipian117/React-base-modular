import { useState } from "react";
import { AppRoutes } from "./routes/App-routes";
// import {  } from "./components/context/auth.context"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AppRoutes isLoggedIn={isLoggedIn} />;
}

export default App;
