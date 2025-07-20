import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/register", data);
    if (response.data.success) {
      window.location.href = "http://localhost:5174/holding";
    } else {
      alert("User Already Registered");
    }
  };

  return (
    <div>
      <div>
        <h1>Register User</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e) => {
                  setData({
                    ...data,
                    username: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                placeholder="user@gmail.com"
                onChange={(e) => {
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="username">Password: </label>
              <input
                type="password"
                id="password"
                placeholder="$$$$$$"
                onChange={(e) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 py-2 px-8 rounded text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
