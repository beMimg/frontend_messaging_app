import axios from "axios";
import { useState } from "react";
import { API_DOMAIN } from "../../utils/API_DOMAIN";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_DOMAIN}/login`, {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        return console.log(response.data.token);
      }
    } catch (err) {
      return setErrors(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
