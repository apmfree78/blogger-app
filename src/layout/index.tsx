import { ReactElement } from "react";
import "styles/App.css";

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return <div className="App center">{children}</div>;
};

export default Layout;
