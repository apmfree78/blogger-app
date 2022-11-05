import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GlobalProvider } from "./state/context";
import { store } from "redux/store";
import { Provider } from "react-redux";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <GlobalProvider>{children}</GlobalProvider>;
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
