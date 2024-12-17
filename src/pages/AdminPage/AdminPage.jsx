import React from "react";
import { useSelector } from "react-redux";

export const AdminPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <div>Nu aveți permisiunea de a accesa această pagină.</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Adaugă componentele pentru administrarea produselor */}
    </div>
  );
};
