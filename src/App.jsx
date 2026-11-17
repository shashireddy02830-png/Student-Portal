import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })

      .then(data => {
        setUsers(data);
        setLoading(false);
      })

      .catch(() => {
        setError("Unable to load student information");
        setLoading(false);
      });

  }, []);

  return (

    <div className="container">

      <h1>Student Portal</h1>

      <h2>Student Information</h2>

      {loading && <p>Loading students...</p>}

      {error && <p>{error}</p>}

      <div className="student-list">

        {users.map(user => (

          <div className="user-card" key={user.id}>

            <h3>{user.name}</h3>

            <p>Email: {user.email}</p>

            <p>City: {user.address.city}</p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default App;