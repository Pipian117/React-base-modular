import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import App from "./App";
import { store } from "./store/auth-reducer";
import { ToastProvider } from "./shared/toast-shared/toast";

import "primereact/resources/themes/lara-light-indigo/theme.css";

import "./styles/index.css";
import "./styles/theme.css";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PrimeReactProvider value={{ ripple: true }}>
      <BrowserRouter>
        <ToastProvider>
          <App />
        </ToastProvider>
      </BrowserRouter>
    </PrimeReactProvider>
  </Provider>
);
