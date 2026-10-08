import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { courses } from "./data/courses";

const icons = { C: "C", Java: "☕", Python: "🐍" };

function CourseCard({ course, onOpen }) {
  const completed = course.modules.reduce((n, m) => n + m.lessons.filter(l => l.completed).length, 0);
  const total = course.modules.reduce((n, m) => n + m.lessons.length, 0);
  const pct = Math.round((completed / total) * 100);
  return (
    <button className="course-card" onClick={() => onOpen(course.id)}>
      <div className="course-icon">{icons[course.language]}</div>
      <div className="course-main">
        <div className="eyebrow">{course.level}</div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="progress-row"><span>{completed}/{total} lessons</span><span>{pct}%</span></div>
        <div className="progress"><span style={{ width: pct + "%" }} /></div>
      </div>
      <div className="arrow">→</div>
    </button>
  );
}

function App() {
  const [active, setActive] = useState("home");
  const [courseId, setCourseId] = useState("python");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return courses;
    return courses.filter(c => [c.title, c.language, c.description].join(" ").toLowerCase().includes(q));
  }, [query]);

  if (active === "course") {
    const course = courses.find(c => c.id === courseId);
    return <CourseView course={course} onBack={() => setActive("home")} />;
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand" onClick={() => setActive("home")}><span className="brand-mark">⌁</span> CODEVEXA</div>
        <nav>
          <button className={active === "home" ? "nav-active" : ""} onClick={() => setActive("home")}>Home</button>
          <button>Courses</button>
          <button>Code Arena</button>
          <button>RPG</button>
          <button>AI Tutor</button>
        </nav>
        <div className="profile-pill">LV 01 · 0 XP</div>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="badge">REAL-WORLD CODING LEARNING</div>
            <h1>Learn to code.<br /><span>Build the skill.</span></h1>
            <p>Structured C, Java and Python courses connected to practice, challenges, visualization, gamification and AI tutoring.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => setActive("course")}>Start learning</button>
              <button className="secondary">Explore Code Arena</button>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-kicker">YOUR LEARNING LOOP</div>
            <div className="loop">
              {["Learn", "Practice", "Submit", "Visualize", "Get AI Help", "Earn XP"].map((x, i) => <div key={x} className="loop-item"><b>{String(i + 1).padStart(2, "0")}</b>{x}</div>)}
            </div>
          </div>
        </section>

        <section className="stats">
          <div><strong>3</strong><span>Core languages</span></div>
          <div><strong>65+</strong><span>Course modules</span></div>
          <div><strong>∞</strong><span>Practice growth</span></div>
          <div><strong>AI</strong><span>Learning support</span></div>
        </section>

        <section className="content-section">
          <div className="section-head">
            <div>
              <div className="eyebrow">LEARNING CENTER</div>
              <h2>Master the fundamentals</h2>
            </div>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search C, Java or Python" />
          </div>
          <div className="course-grid">{filtered.map(course => <CourseCard key={course.id} course={course} onOpen={(id) => { setCourseId(id); setActive("course"); }} />)}</div>
        </section>

        <section className="feature-grid">
          <div className="feature"><div className="feature-num">01</div><h3>Semantic Judge</h3><p>Validate what the code means—not only an exact string. A variable can be named <code>coin</code>, <code>a</code>, or <code>x</code> when the requirement allows it.</p></div>
          <div className="feature"><div className="feature-num">02</div><h3>Code Visualizer</h3><p>Turn execution into a visible sequence of variable changes, loops, arrays and data structures.</p></div>
          <div className="feature"><div className="feature-num">03</div><h3>AI Tutor</h3><p>Get hints, debugging help, explanations and personalized practice without replacing the learning process.</p></div>
        </section>
      </main>
    </div>
  );
}

function CourseView({ course, onBack }) {
  const [moduleIndex, setModuleIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const module = course.modules[moduleIndex];
  const lesson = module.lessons[lessonIndex];

  return (
    <div className="app-shell course-shell">
      <header className="topbar">
        <div className="brand" onClick={onBack}><span className="brand-mark">⌁</span> CODEVEXA</div>
        <div className="crumbs">{course.title}</div>
        <div className="profile-pill">COURSE MODE</div>
      </header>
      <main className="course-page">
        <button className="back" onClick={onBack}>← Back to courses</button>
        <div className="course-layout">
          <aside className="sidebar">
            <div className="eyebrow">{course.language} · {course.level}</div>
            <h2>{course.title}</h2>
            {course.modules.map((m, i) => (
              <button key={m.id} className={i === moduleIndex ? "module active" : "module"} onClick={() => { setModuleIndex(i); setLessonIndex(0); }}>
                <span>{String(i + 1).padStart(2, "0")}</span><div><b>{m.title}</b><small>{m.lessons.length} lessons</small></div>
              </button>
            ))}
          </aside>
          <section className="lesson">
            <div className="eyebrow">MODULE {String(moduleIndex + 1).padStart(2, "0")}</div>
            <h1>{lesson.title}</h1>
            <p className="lead">{lesson.summary}</p>
            <div className="lesson-card">
              <h3>What you will learn</h3>
              <ul>{lesson.points.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
            <div className="code-card">
              <div className="code-head"><span>Example</span><span>{course.language}</span></div>
              <pre>{lesson.code}</pre>
            </div>
            <div className="lesson-actions">
              <button className="secondary" disabled={lessonIndex === 0} onClick={() => setLessonIndex(i => i - 1)}>Previous</button>
              <button className="primary" onClick={() => lessonIndex < module.lessons.length - 1 ? setLessonIndex(i => i + 1) : moduleIndex < course.modules.length - 1 ? (setModuleIndex(i => i + 1), setLessonIndex(0)) : null}>
                {lessonIndex < module.lessons.length - 1 || moduleIndex < course.modules.length - 1 ? "Next lesson →" : "Course complete"}
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
