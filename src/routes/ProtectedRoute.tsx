import { Navigate } from "react-router-dom";
import { ReactComponentElement } from "react";

type PropsType = {
  children: ReactComponentElement<any>;
};

export const ProtectedRoute: React.FC<PropsType> = ({ children }) => {
  const logined = false
  console.log(logined)
  return logined ? children : <Navigate to="/pageghb" />;
};