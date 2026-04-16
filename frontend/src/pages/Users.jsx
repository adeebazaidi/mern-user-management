import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { Trash2, PlusCircle } from "lucide-react";

function Users() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const currentUser = JSON.parse(localStorage.getItem("user"));

  // 🚫 Restrict access
  if (currentUser?.role !== "admin") {
    return <h2 style={{ padding: "20px" }}>Access Denied</h2>;
  }

  // 🔹 Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔹 Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get(
          `/users?search=${debouncedSearch}&page=${page}`,
        );
        setUsers(res.data.users);
        setPages(res.data.pages);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch users");
      }
    };

    fetchUsers();
  }, [debouncedSearch, page]);

  // 🔹 Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await API.delete(`/users/${id}`);
      setPage(1); // refresh from first page
    } catch {
      alert("Delete failed");
    }
  };

  // 🔹 Create user
  const handleCreate = async () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      await API.post("/users", {
        name,
        email,
        password,
        role,
      });

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setRole("user");

      setPage(1); // refresh list
    } catch {
      alert("Create failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="users-page">
        {/* CREATE USER */}
        <div className="section">
          <h2>Create User</h2>

          <div className="create-user-card">
            <div className="form-grid">
              <input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>

              <button onClick={handleCreate} className="create-btn">
                <PlusCircle size={16} style={{ marginRight: "6px" }} />
                Create User
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="section">
          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="search-input"
          />
        </div>

        {/* USERS TABLE */}
        <div className="section">
          <h2>All Users</h2>

          <div className="users-table-card">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th style={{ textAlign: "right" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      style={{ textAlign: "center", padding: "20px" }}
                    >
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr key={u._id}>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>
                        <span className={`role ${u.role}`}>{u.role}</span>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <button
                          onClick={() => handleDelete(u._id)}
                          className="delete-btn"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Prev
            </button>

            <span>
              Page {page} of {pages}
            </span>

            <button disabled={page === pages} onClick={() => setPage(page + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;

