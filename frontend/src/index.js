import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { Provider } from "react-redux";
import store from "./Store/store";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <Provider store={store}>
        <React.StrictMode>
          <App />
          <Analytics />
        </React.StrictMode>
      </Provider>
    </ChatContextProvider>
  </AuthContextProvider>
);
