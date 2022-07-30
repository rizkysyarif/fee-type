import React from "react";
import HeaderComponent from "../../components/HeaderComponent";

const Dashboard = () => {
  const href = window.location.pathname.split("/");
  return (
    <>
      <div className="p-24">
        <HeaderComponent title={href} curNav={href[href.length - 1]} />
      </div>
      <div className="home">
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
