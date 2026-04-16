import Navbar from "../components/Navbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-hero">
        <div className="hero-card">
          <h1>
            Welcome back, <span>{user?.name || "User"}</span>
          </h1>

          <p className="subtext">
            You are logged in as <b>{user?.role || "user"}</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
