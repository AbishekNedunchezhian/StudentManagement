import { useState } from 'react';
import img from './Image/student.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [reg, setReg] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginHandling = async () => {
    const login = {
      reg,
      password,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/student/log", login);
      if (response.data === "Login Successfully") {
        alert("Login Successfully");
        navigate("/Dashboard/Home");
        sessionStorage.setItem('lreg', reg);
      } else {
        alert("Login failed");
        navigate("/");
      }
    } catch (error) {
      alert("Your backend is not connected");
    }
  };

  return (
    <div className="row justify-content-center">
      {/* Image Column */}
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="img-fluid"
          src={img}
          alt="Student"
          style={{ maxHeight: '500px', maxWidth: '100%' }}
        />
      </div>

      {/* Login Form Column */}
      <div className="col-12 col-md-6">
        <div className="border rounded shadow p-4" style={{ marginTop: "80px", maxWidth: "400px", margin: "0 auto" }}>
          <p className="text-center fs-3">Student Login</p>

          {/* Register Number Input */}
          <div className="form-group mt-3">
            <label className="form-label">Register Number</label>
            <input
              type="text"
              value={reg}
              onChange={(e) => setReg(e.target.value)}
              className="form-control"
              placeholder="Enter your reg"
            />
          </div>

          {/* Password Input */}
          <div className="form-group mt-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-100 mt-4" onClick={LoginHandling}>
            Login
          </button>

          {/* Register Link */}
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary w-100">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
