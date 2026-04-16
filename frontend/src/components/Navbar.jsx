import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <Link to="/dashboard" className="logo">
          Dashboard
        </Link>

        {user?.role === "admin" && (
          <Link to="/users" className="nav-link">
            Users
          </Link>
        )}
        <Link to="/profile" style={{ color: "white", marginRight: "10px" }}>
          Profile
        </Link>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <span className="nav-user">{user?.name || "User"}</span>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
