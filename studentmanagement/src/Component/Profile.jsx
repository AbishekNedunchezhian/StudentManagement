import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [display, setDisplay] = useState(null);  // Initially set to null to handle loading state
  const [loading, setLoading] = useState(true);  // For loading state

  const student_reg = sessionStorage.getItem('rreg');
  const student_log = sessionStorage.getItem('lreg');

  useEffect(() => {
    const reg = student_reg || student_log;
    if (reg) {
      displayapi(reg);
    } else {
      alert("Backend not connected, login registration issue!");
    }
  }, [student_reg, student_log]);

  const displayapi = async (reg) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/student/display/${reg}`);
      const student = response.data[0];
      if (student) {
        setDisplay(student);
      } else {
        alert("Data not found");
      }
    } catch (error) {
      alert("Backend not connected");
    } finally {
      setLoading(false); // End loading state
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <p>Loading profile data...</p>
      </div>
    );
  }

  return (
    <div className="m-5">
      {display ? (
        <div>
          <h3 className="text-center">Student Profile</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-white bg-dark p-2">Name</th>
                <th className="text-white bg-dark p-2">Register</th>
                <th className="text-white bg-dark p-2">Age</th>
                <th className="text-white bg-dark p-2">Year</th>
                <th className="text-white bg-dark p-2">College</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{display.name}</td>
                <td>{display.reg}</td>
                <td>{display.age}</td>
                <td>{display.year}</td>
                <td>{display.clg}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">
          <p>No data available for this student.</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
