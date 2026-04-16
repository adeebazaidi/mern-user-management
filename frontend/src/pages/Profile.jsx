import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/users/profile");
        setUser(res.data);
        setName(res.data.name);
      } catch (error) {
        console.error(error);
        alert("Failed to load profile");
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await API.put("/users/profile", {
        name,
        password,
      });

      alert("Profile updated");
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>My Profile</h2>

        <div className="card">
          <p>
            <b>Email:</b> {user?.email}
          </p>

          <input value={name} onChange={(e) => setName(e.target.value)} />

          <input
            placeholder="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
