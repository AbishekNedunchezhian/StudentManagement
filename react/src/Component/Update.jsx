import { useState } from 'react';
import img from './Image/student.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [year, setYear] = useState("");
  const [clg, setClg] = useState("");

  const student_reg = sessionStorage.getItem('rreg');
  const student_log = sessionStorage.getItem('lreg');
  const register = student_log || student_reg;
  const navigate = useNavigate();

  const Updatehandling = async () => {
    const updatedStudent = {
      name,
      reg,
      password,
      age,
      year,
      clg
    };

    try {
      const response = await axios.put("http://localhost:8080/api/v1/student/update", updatedStudent);
      if (response.data === "Your data updated successfully") {
        alert("Update Successful");
        navigate('/Dashboard/Profile');
      } else {
        alert("There was an issue updating your data.");
      }
    } catch (error) {
      alert("Error connecting to the backend.");
    }
  };

  return (
    <div className="row justify-content-center">
      {/* Left Column: Image */}
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={img} alt="Student" style={{ maxHeight: '500px', maxWidth: '100%' }} />
      </div>

      {/* Right Column: Form */}
      <div className="col-12 col-md-6">
        <div className="border rounded shadow p-4" style={{ marginTop: "80px", width: "100%", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
          <p className="text-center fs-4">Student Update</p>

          {/* Registration Number (Read-only) */}
          <div className="form-group mt-2">
            <input
              value={reg}
              onChange={(e) => setReg(e.target.value)}
              className="form-control"
              placeholder={register}
              readOnly
            />
          </div>

          {/* Name */}
          <div className="form-group mt-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          {/* Password */}
          <div className="form-group mt-2">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              type="password"
            />
          </div>

          {/* Age */}
          <div className="form-group mt-2">
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              placeholder="Enter your age"
            />
          </div>

          {/* Year */}
          <div className="form-group mt-2">
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="form-control"
              placeholder="Enter your year"
            />
          </div>

          {/* College */}
          <div className="form-group mt-2">
            <input
              value={clg}
              onChange={(e) => setClg(e.target.value)}
              className="form-control"
              placeholder="Enter your college"
            />
          </div>

          {/* Save Update Button */}
          <button className="btn btn-primary w-100 mt-3" onClick={Updatehandling}>
            Save Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
