
import "./App.css";
import nflTopics from "./data/nflTopics";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">YOUR STARTING LINEUP FOR FOOTBALL</p>
        <h1>NFL Learning Hub</h1>
        <p className="hero-description">
          New to football? Learn the rules, explore player positions,
          and discover what makes the National Football League exciting.
        </p>
      </header>

      <main>
        <section className="welcome-section">
          <p className="section-label">WELCOME, FOOTBALL FANS</p>
          <h2>Learn the game, one play at a time.</h2>
          <p>
            The NFL Learning Hub is a beginner-friendly introduction
            to professional American football. Start with the basics
            and build your understanding of the game.
          </p>
        </section>

        <section className="topics-section">
          <h2>Explore the Basics</h2>
          <p className="section-intro">
            Choose a topic to start learning about the NFL.
          </p>

          <div className="topic-grid">
            {nflTopics.map((topic) => (
              <article className="topic-card" key={topic.title}>
                <span className="topic-icon" aria-hidden="true">
                  {topic.icon}
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>NFL Learning Hub | Application Development II</p>
        <p>Built with React and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
