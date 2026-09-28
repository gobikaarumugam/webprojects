import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", attendance: "Absent" },
    { id: 2, name: "Priya", attendance: "Absent" },
    { id: 3, name: "Kavin", attendance: "Absent" },
    { id: 4, name: "Divya", attendance: "Absent" },
    { id: 5, name: "Rahul", attendance: "Absent" },
    { id: 6, name: "Sneha", attendance: "Absent" },
    { id: 7, name: "Pooja", attendance: "Absent" },
    { id: 8, name: "Mani", attendance: "Absent" },
    { id: 9, name: "Ananya", attendance: "Absent" },
    { id: 10, name: "Rohith", attendance: "Absent" },
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, attendance: status }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.attendance === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.attendance === "Absent"
  ).length;

  return (
    <div className="app">
      <h1>Student Attendance</h1>

      <div className="summary">
        <div className="box total">
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="box present">
          <h2>{presentCount}</h2>
          <p>Present</p>
        </div>

        <div className="box absent">
          <h2>{absentCount}</h2>
          <p>Absent</p>
        </div>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            
            <div className="student-details">
              <span className="student-number">
                {student.id}
              </span>

              <span className="student-name">
                {student.name}
              </span>
            </div>

            <div className="attendance-buttons">
              <button
                className={
                  student.attendance === "Present"
                    ? "present active"
                    : "present"
                }
                onClick={() =>
                  markAttendance(student.id, "Present")
                }
              >
                Present
              </button>

              <button
                className={
                  student.attendance === "Absent"
                    ? "absent active"
                    : "absent"
                }
                onClick={() =>
                  markAttendance(student.id, "Absent")
                }
              >
                Absent
              </button>
            </div>

            <span
              className={
                student.attendance === "Present"
                  ? "status present-text"
                  : "status absent-text"
              }
            >
              {student.attendance}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;