import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import Router from "./router";


import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const apiServerUrl = import.meta.env.VITE_API_URL

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
