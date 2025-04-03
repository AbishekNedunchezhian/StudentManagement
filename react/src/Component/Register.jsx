import { useState } from 'react';
import img from './Image/student.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [year, setYear] = useState("");
  const [clg, setClg] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(""); // To manage error message
  const navigate = useNavigate();

  const RegisterHandling = async () => {
    if (!name || !reg || !password || !age || !year || !clg) {
      setError("Please fill in all fields!");
      return;
    }

    const registerData = {
      name,
      reg,
      password,
      age,
      year,
      clg
    };

    setLoading(true);
    setError(""); // Clear previous error messages

    try {
      const response = await axios.post("http://localhost:8080/api/v1/student/reg", registerData);

      if (response.data) {
        alert("Registered Successfully");
        navigate("/Dashboard/Home");
        sessionStorage.setItem('rreg', reg); // Store the register number in session storage
      }
    } catch (error) {
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      {/* Image Column */}
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={img} alt="Student" style={{ maxHeight: '500px', maxWidth: '100%' }} />
      </div>

      {/* Registration Form Column */}
      <div className="col-12 col-md-6">
        <div className="border rounded shadow p-4" style={{ marginTop: "80px", width: "100%", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
          <p className="text-center fs-3">Student Registration</p>

          {/* Display Error if Any */}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Form Fields */}
          <div className="form-group mt-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

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

          <div className="form-group mt-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              placeholder="Enter your age"
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Year</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="form-control"
              placeholder="Enter your year"
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">College</label>
            <input
              type="text"
              value={clg}
              onChange={(e) => setClg(e.target.value)}
              className="form-control"
              placeholder="Enter your college"
            />
          </div>

          {/* Submit Button */}
          <button
            className="btn btn-primary w-100 mt-4"
            onClick={RegisterHandling}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Login Link */}
          <div className="text-center mt-3">
            <Link to="/Login" className="btn btn-secondary w-100">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
