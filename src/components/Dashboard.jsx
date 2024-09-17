import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <h1>Bienvenue sur le tableau de bord</h1>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Déconnexion
      </button>
    </div>
  );
};

export default Dashboard;
