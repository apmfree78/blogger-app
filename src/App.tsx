import { Routes, Route } from "react-router-dom";
import "bulmaswatch/sandstone/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "components/dashboard/DashBoard";
import SignIn from "components/user/SignIn";
import SignUp from "components/user/SignUp";
import Posts from "components/posts/Posts";
import ProtectedRoute from "routes/ProtectedRoute";
import Layout from "layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/posts"
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
