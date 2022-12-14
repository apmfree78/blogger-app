import { Routes, Route } from "react-router-dom";
import "bulmaswatch/sandstone/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "components/dashboard/DashBoard";
import SignIn from "components/user/SignIn";
import SignUp from "components/user/SignUp";
import ProtectedRoute from "routes/ProtectedRoute";

function App() {
  return (
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
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
