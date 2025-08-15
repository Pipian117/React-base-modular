import { useState } from "react";
import { AppRoutes } from "./routes/App-routes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AppRoutes isLoggedIn={isLoggedIn} />;
}

export default App;
