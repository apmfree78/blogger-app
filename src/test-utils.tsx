import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GlobalProvider } from "./state/context";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { QueryClientProvider, setLogger } from "react-query";
import { generateQueryClient } from "react-query/queryClient";
import { BrowserRouter } from "react-router-dom";

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

// make a function to generate a unique query client for each test
const generateQueryTestClient = () => {
  const client = generateQueryClient();
  const options = client.getDefaultOptions();
  options.queries = { ...options.queries, retry: false };
  return client;
};

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = generateQueryTestClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalProvider>
        ;
      </Provider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
