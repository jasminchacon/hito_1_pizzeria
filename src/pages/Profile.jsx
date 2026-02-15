import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      if (data?.email) {
        setUserEmail(data.email);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Perfil de Usuario</h2>

      <p className="mt-4">
        <strong>Email:</strong> {userEmail}
      </p>

      <button
        className="btn btn-dark mt-3"
        onClick={handleLogout}
      > Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
