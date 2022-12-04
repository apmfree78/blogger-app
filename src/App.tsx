import { Routes, Route } from "react-router-dom";
import "bulmaswatch/sandstone/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "components/DashBoard";
import SignIn from "user/SignIn";
import ProtectedRoute from "routes/ProtectedRoute";
import "styles/App.css";

function App() {
  return (
    <div className="App center">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
