import { useState } from 'react';
import img from './Image/student.png';
import axios from 'axios';

function AddMark() {
  const [reg, setReg] = useState("");
  const [sub_code, setSubCode] = useState("");
  const [sub_name, setSubName] = useState("");
  const [sub_mark, setSubMark] = useState("");
  const [grade, setGrade] = useState("");
  const [result, setResult] = useState("");

  const MarkHandling = async () => {
    const Addmark = {
      reg,
      sub_code,
      sub_name,
      sub_mark,
      grade,
      result
    };

    try {
      const response = await axios.post("http://localhost:8080/api/v2/student/addmark", Addmark);
      if (response.data) {
        alert("Mark Added Successfully");
      }
    } catch (error) {
      alert("Your data could not be stored in the Database");
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img className="img-fluid rounded" src={img} alt="Student" />
        </div>

        {/* Form Column */}
        <div className="col-12 col-md-6">
          <div className="border rounded shadow p-4" style={{ marginTop: "80px" }}>
            <h3 className="text-center mb-4">Add Marks</h3>

            <div className="form-group mt-3">
              <input
                value={reg}
                onChange={(e) => setReg(e.target.value)}
                className="form-control"
                placeholder="Enter your registration number"
              />
            </div>

            <div className="form-group mt-3">
              <input
                value={sub_code}
                onChange={(e) => setSubCode(e.target.value)}
                className="form-control"
                placeholder="Enter your subject code"
              />
            </div>

            <div className="form-group mt-3">
              <input
                value={sub_name}
                onChange={(e) => setSubName(e.target.value)}
                className="form-control"
                placeholder="Enter your subject name"
              />
            </div>

            <div className="form-group mt-3">
              <input
                value={sub_mark}
                onChange={(e) => setSubMark(e.target.value)}
                className="form-control"
                placeholder="Enter your marks"
              />
            </div>

            <div className="form-group mt-3">
              <input
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="form-control"
                placeholder="Enter your grade"
              />
            </div>

            <div className="form-group mt-3">
              <input
                value={result}
                onChange={(e) => setResult(e.target.value)}
                className="form-control"
                placeholder="Enter your result"
              />
            </div>

            <button
              className="btn btn-primary w-100 mt-4"
              onClick={MarkHandling}
            >
              Add Mark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMark;
