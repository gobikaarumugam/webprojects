import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete Web Technology assignment", completed: false },
    { id: 2, text: "Study Java", completed: true },
    { id: 3, text: "Prepare project report", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* Navbar */}
      <nav className="navbar">
        <h1>TaskFlow</h1>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("tasks")}>To-Do List</button>
          <button onClick={() => setPage("calendar")}>Calendar</button>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
          <button onClick={() => setPage("about")}>About</button>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <section className="home page">
          <div className="hero">
            <h2>Organize Your Day</h2>

            <p>
              Manage your daily tasks, plan your schedule and stay
              productive with TaskFlow.
            </p>

            <button
              className="main-btn"
              onClick={() => setPage("tasks")}
            >
              Get Started
            </button>
          </div>

          <div className="features">
            <div className="feature-card">
              <span>📝</span>
              <h3>To-Do List</h3>
              <p>Create and manage your daily tasks easily.</p>
            </div>

            <div className="feature-card">
              <span>📅</span>
              <h3>Calendar</h3>
              <p>View your monthly schedule and plan ahead.</p>
            </div>

            <div className="feature-card">
              <span>📊</span>
              <h3>Dashboard</h3>
              <p>Track your completed and pending tasks.</p>
            </div>
          </div>
        </section>
      )}

      {/* TODO PAGE */}
      {page === "tasks" && (
        <section className="page">
          <h2 className="page-title">📝 My To-Do List</h2>

          <div className="todo-container">

            <div className="input-area">
              <input
                type="text"
                placeholder="Enter a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTask();
                  }
                }}
              />

              <button onClick={addTask}>Add Task</button>
            </div>

            <div className="task-list">
              {tasks.length === 0 ? (
                <p className="empty">No tasks available.</p>
              ) : (
                tasks.map((task) => (
                  <div className="task" key={task.id}>

                    <div className="task-left">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                      />

                      <span
                        className={
                          task.completed ? "completed" : ""
                        }
                      >
                        {task.text}
                      </span>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>

                  </div>
                ))
              )}
            </div>

          </div>
        </section>
      )}

      {/* CALENDAR PAGE */}
      {page === "calendar" && (
        <section className="page">
          <h2 className="page-title">📅 Calendar</h2>

          <div className="calendar">

            <div className="calendar-header">
              <button>‹</button>
              <h3>September 2026</h3>
              <button>›</button>
            </div>

            <div className="weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>

            <div className="days">

              <div className="empty-day"></div>
              <div className="empty-day"></div>

              {Array.from({ length: 30 }, (_, index) => (
                <div
                  className={
                    index + 1 === 25
                      ? "day today"
                      : "day"
                  }
                  key={index}
                >
                  {index + 1}
                </div>
              ))}

            </div>

          </div>
        </section>
      )}

      {/* DASHBOARD PAGE */}
      {page === "dashboard" && (
        <section className="page">
          <h2 className="page-title">📊 Dashboard</h2>

          <div className="stats">

            <div className="stat-card">
              <h3>{tasks.length}</h3>
              <p>Total Tasks</p>
            </div>

            <div className="stat-card">
              <h3>{completedTasks}</h3>
              <p>Completed</p>
            </div>

            <div className="stat-card">
              <h3>{pendingTasks}</h3>
              <p>Pending</p>
            </div>

          </div>

          <div className="progress-box">
            <h3>Task Progress</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width:
                    tasks.length === 0
                      ? "0%"
                      : `${(completedTasks / tasks.length) * 100}%`
                }}
              ></div>
            </div>

            <p>
              {tasks.length === 0
                ? 0
                : Math.round((completedTasks / tasks.length) * 100)}
              % Completed
            </p>
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {page === "about" && (
        <section className="page about">
          <h2 className="page-title">ℹ️ About TaskFlow</h2>

          <div className="about-card">
            <h2>TaskFlow</h2>

            <p>
              TaskFlow is a simple task management web application
              designed to help users organize their daily activities.
            </p>

            <h3>Features</h3>

            <ul>
              <li>Create new tasks</li>
              <li>Mark tasks as completed</li>
              <li>Delete tasks</li>
              <li>Monthly calendar</li>
              <li>Task progress dashboard</li>
              <li>Dark and light mode</li>
              <li>Multiple page navigation</li>
            </ul>

            <p>
              This project is developed using React JS, JavaScript,
              HTML and CSS.
            </p>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer>
        <p>© 2026 TaskFlow | Web Interface Project</p>
      </footer>

    </div>
  );
}

export default App;