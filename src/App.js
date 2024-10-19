import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(
      "User Details are:",
      "Username: ",
      username,
      "\n",
      "Password: ",
      password,
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        name="username"



        
        placeholder="Enter the username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={!username && !password}>
        Submit
      </button>
    </div>
  );
}

export default App;
