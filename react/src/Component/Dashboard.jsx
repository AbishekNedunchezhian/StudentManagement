import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="row bg-dark">
        {/* Header Section */}
        <div className="col-12 col-md-6">
          <p className="text-white h3 m-3">Student Dashboard</p>
        </div>
        {/* Navigation Section */}
        <div className="col-12 col-md-6">
          <nav className="nav flex-column flex-md-row mt-3">
            <Link to="/Dashboard/Home" className="text-white nav-link mb-2 mb-md-0 ms-5">
              Home
            </Link>
            <Link to="/Dashboard/Result" className="text-white nav-link mb-2 mb-md-0 ms-5">
              Result
            </Link>
            <Link to="/Dashboard/Profile" className="text-white nav-link mb-2 mb-md-0 ms-5">
              Profile
            </Link>
            <Link to="/Dashboard/Update" className="text-white nav-link mb-2 mb-md-0 ms-5">
              Update
            </Link>
            <Link to="/" className="text-white nav-link mb-2 mb-md-0 ms-5">
              Logout
            </Link>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
