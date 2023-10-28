import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isConnected = false;

  return (
    <>
      {isConnected ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 objext-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
