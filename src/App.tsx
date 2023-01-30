import { Routes, Route } from "react-router-dom";
import "bulmaswatch/sandstone/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "components/dashboard/DashBoard";
import SignIn from "components/user/SignIn";
import SignUp from "components/user/SignUp";
import Posts from "components/posts/Posts";
import ProtectedRoute from "routes/ProtectedRoute";
import EditPost from "components/posts/EditPost";

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
      <Route
        path="/post/:id"
        element={
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        }
      />
      <Route
        path="posts"
        element={
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
