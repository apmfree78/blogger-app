import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "react-query/queryClient";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import { GlobalProvider } from "state/context";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </BrowserRouter>
      </GlobalProvider>
    </Provider>
  </React.StrictMode>
);
