import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Home</h1>

      {user && (
        <>
          <h2>{user.fullname}</h2>
          <h2>{user.email}</h2>
          <h2>{user.role}</h2>
        </>
      )}
    </div>
  );
}

export default Home;
