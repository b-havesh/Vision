import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-twkdphnst4ya1rk4.us.auth0.com"
    clientId="iKkV5l2wNi1pucUwSAIQUaqOL3f2Ev4t"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
