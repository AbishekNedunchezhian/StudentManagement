import { useEffect, useState } from 'react';
import img2 from './Image/university.jpg';
import axios from 'axios';

function Home() {
  const [display, setDisplay] = useState("");
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
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/student/display/${reg}`);
      const student = response.data[0];
      console.log(response.data);
      if (student) {
        setDisplay(student);
      } else {
        alert("Data not available");
      }
    } catch (error) {
      alert("Backend not connected");
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img className="img-fluid rounded" src={img2} alt="University" />
        </div>

        {/* Content Column */}
        <div className="col-12 col-md-6">
          <div className="p-4">
            <h2 className="text-primary">Welcome, {display.name}</h2>
            <p className="mt-3 fs-5 fst-italic">
              You will be able to view your results and subsequently, access your profile to check and update your personal information, ensuring a comprehensive and seamless user experience.
            </p>
            <p className="mt-4 fs-5 fst-italic">
              Your results are confidential data, and you are only authorized to view them, not share or distribute them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
