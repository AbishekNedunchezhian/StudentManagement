import { useEffect, useState } from 'react';
import axios from 'axios';

function Result() {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const student_reg = sessionStorage.getItem('rreg');
  const student_log = sessionStorage.getItem('lreg');

  useEffect(() => {
    const reg = student_reg || student_log;
    if (reg) {
      displayApi(reg);
    } else {
      alert("Backend not connected, login registration issue!");
    }
  }, [student_reg, student_log]);

  const displayApi = async (reg) => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    try {
      const response = await axios.get(`http://localhost:8080/api/v2/student/markdisplay/${reg}`);
      const marks = response.data;

      if (marks && marks.length > 0) {
        setDisplay(marks);
      } else {
        setDisplay([]);
        setError("No results found for this student.");
      }
    } catch (error) {
      setError("Backend not connected or an error occurred.");
    } finally {
      setLoading(false); // Stop loading once the request completes
    }
  };

  return (
    <div className="m-5">
      {/* Loading Indicator */}
      {loading && <div className="text-center">Loading...</div>}

      {/* Error Message */}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Results Table */}
      {!loading && !error && display.length === 0 && (
        <div className="alert alert-info text-center">No results available for this student.</div>
      )}

      {display.length > 0 && (
        <table className="table table-bordered table-striped table-responsive">
          <thead>
            <tr>
              <th className="text-white bg-dark p-1">Register</th>
              <th className="text-white bg-dark">Sub_code</th>
              <th className="text-white bg-dark">Sub_name</th>
              <th className="text-white bg-dark">Sub_mark</th>
              <th className="text-white bg-dark">Grade</th>
              <th className="text-white bg-dark">Status</th>
            </tr>
          </thead>
          <tbody>
            {display.map((mark, index) => (
              <tr key={index}>
                <td>{mark.reg}</td>
                <td>{mark.sub_code}</td>
                <td>{mark.sub_name}</td>
                <td>{mark.sub_mark}</td>
                <td>{mark.grade}</td>
                <td>{mark.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Result;
