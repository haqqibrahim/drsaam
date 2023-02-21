import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { Provider } from "react-redux";
import store from "./Store/store";
import { Analytics } from "@vercel/analytics/react";
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { Notifications } from 'react-push-notification';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <Provider store={store}>
        <React.StrictMode>
        <Notifications />

          <App />
          <Analytics />
        </React.StrictMode>
      </Provider>
    </ChatContextProvider>
  </AuthContextProvider>
);


reportWebVitals(sendToVercelAnalytics);