import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import "./App.css";

// ---------------- HOME ----------------
function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Student Report Card</h1>
        <p>Manage student profile, marksheet, year count and administration.</p>

        <div className="home-cards">
          <div className="card">
            <h2>👤 Profile</h2>
            <p>View student personal information.</p>
            <Link to="/profile">View Profile</Link>
          </div>

          <div className="card">
            <h2>📋 Marksheet</h2>
            <p>View subject marks and results.</p>
            <Link to="/marksheet">View Marksheet</Link>
          </div>

          <div className="card">
            <h2>📅 Year Count</h2>
            <p>Check academic year details.</p>
            <Link to="/year-count">View Years</Link>
          </div>

          <div className="card">
            <h2>⚙️ Admin</h2>
            <p>Manage student report details.</p>
            <Link to="/admin">Admin Panel</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------- PROFILE ----------------
function Profile() {
  return (
    <div className="page">
      <h1>Student Profile</h1>

      <div className="profile-box">
        <div className="profile-icon">👩‍🎓</div>

        <h2>Gobika A</h2>

        <div className="profile-details">
          <p><b>Register Number:</b> 411625243015</p>
          <p><b>Department:</b> Artificial Intelligence and Data Science</p>
          <p><b>College:</b> Prince Dr K Vasudevan College of Engineering and Technology</p>
          <p><b>Batch:</b> 2025 - 2029</p>
          <p><b>Year:</b> II Year</p>
          <p><b>Status:</b> Active</p>
        </div>
      </div>
    </div>
  );
}

// ---------------- MARKSHEET ----------------
function Marksheet() {
  const subjects = [
    {
      code: "AI101",
      subject: "Artificial Intelligence",
      mark: 87
    },
    {
      code: "CS102",
      subject: "Java Programming",
      mark: 91
    },
    {
      code: "DB103",
      subject: "Database Management System",
      mark: 85
    },
    {
      code: "WT104",
      subject: "Web Technology",
      mark: 94
    },
    {
      code: "OS105",
      subject: "Operating System",
      mark: 82
    }
  ];

  const total = subjects.reduce((sum, item) => sum + item.mark, 0);
  const average = total / subjects.length;

  return (
    <div className="page">
      <h1>Student Marksheet</h1>

      <div className="student-summary">
        <p><b>Name:</b> Gobika A</p>
        <p><b>Register No:</b> 411625243015</p>
        <p><b>Department:</b> AIDS</p>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Code</th>
              <th>Subject</th>
              <th>Mark</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subject, index) => (
              <tr key={subject.code}>
                <td>{index + 1}</td>
                <td>{subject.code}</td>
                <td>{subject.subject}</td>
                <td>{subject.mark}</td>
                <td>
                  {subject.mark >= 50 ? (
                    <span className="pass">PASS</span>
                  ) : (
                    <span className="fail">FAIL</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="result-box">
        <h3>Total Marks: {total} / 500</h3>
        <h3>Average: {average.toFixed(2)}%</h3>
        <h3>Overall Result: PASS</h3>
      </div>
    </div>
  );
}

// ---------------- YEAR COUNT ----------------
function YearCount() {
  const years = [
    {
      year: "2025 - 2026",
      semester: "Semester 1",
      status: "Completed"
    },
    {
      year: "2025 - 2026",
      semester: "Semester 2",
      status: "Completed"
    },
    {
      year: "2026 - 2027",
      semester: "Semester 3",
      status: "Current"
    },
    {
      year: "2026 - 2027",
      semester: "Semester 4",
      status: "Upcoming"
    }
  ];

  return (
    <div className="page">
      <h1>Academic Year Count</h1>

      <div className="year-grid">
        {years.map((item, index) => (
          <div className="year-card" key={index}>
            <h2>{item.year}</h2>
            <h3>{item.semester}</h3>
            <p
              className={
                item.status === "Completed"
                  ? "completed"
                  : item.status === "Current"
                  ? "current"
                  : "upcoming"
              }
            >
              {item.status}
            </p>
          </div>
        ))}
      </div>

      <div className="count-box">
        <h2>Total Academic Semesters: 4</h2>
        <h3>Completed: 2</h3>
        <h3>Current: 1</h3>
        <h3>Upcoming: 1</h3>
      </div>
    </div>
  );
}

// ---------------- ADMIN ----------------
function Admin() {
  const [student, setStudent] = useState({
    name: "Gobika A",
    registerNo: "411625243015",
    department: "AIDS"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Student details updated successfully!");
  };

  return (
    <div className="page">
      <h1>Admin Panel</h1>

      <div className="admin-box">
        <h2>Manage Student Details</h2>

        <form onSubmit={handleSubmit}>
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
          />

          <label>Register Number</label>
          <input
            type="text"
            name="registerNo"
            value={student.registerNo}
            onChange={handleChange}
          />

          <label>Department</label>
          <input
            type="text"
            name="department"
            value={student.department}
            onChange={handleChange}
          />

          <button type="submit">Update Details</button>
        </form>

        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
}

// ---------------- NAVBAR ----------------
function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        🎓 Report Card
      </div>

      <div className="nav-links">
        <Link
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>

        <Link
          className={location.pathname === "/profile" ? "active" : ""}
          to="/profile"
        >
          Profile
        </Link>

        <Link
          className={location.pathname === "/marksheet" ? "active" : ""}
          to="/marksheet"
        >
          Marksheet
        </Link>

        <Link
          className={location.pathname === "/year-count" ? "active" : ""}
          to="/year-count"
        >
          Year Count
        </Link>

        <Link
          className={location.pathname === "/admin" ? "active" : ""}
          to="/admin"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}

// ---------------- APP ----------------
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/marksheet" element={<Marksheet />} />
        <Route path="/year-count" element={<YearCount />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;