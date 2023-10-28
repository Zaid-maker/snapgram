import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isConnected = false;

  return (
    <>
      {isConnected ? (
        <Navigate to="/" />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </>
  );
};

export default AuthLayout;
