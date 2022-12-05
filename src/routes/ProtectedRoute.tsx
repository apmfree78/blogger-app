import { Navigate } from "react-router-dom";
import { useUser } from "components/user/hooks/useUser";
import Navbar from "routes/Navbar";

export const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProtectedRoute;
