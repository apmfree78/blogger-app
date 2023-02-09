import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "state/context";
import { Provider } from "react-redux";
import App from "./App";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "react-query/queryClient";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";

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
