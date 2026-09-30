import { useState } from "react";

const languages = [
  ["HTML", "The building blocks of every webpage", "#e44d26"],
  ["CSS", "Style and layout for web pages", "#1572b6"],
  ["JavaScript", "Interactive and dynamic web pages", "#f0db4f"],
  ["Python", "Popular language for web, data & AI", "#3776ab"],
  ["SQL", "Query and manage databases", "#4479a1"],
  ["Java", "Object-oriented programming language", "#f89820"],
  ["C", "A powerful general-purpose language", "#555555"],
  ["C++", "The language behind games & engines", "#00599c"],
  ["C#", "Build apps, games and web services", "#68217a"],
  ["PHP", "Server-side scripting language", "#777bb4"],
  ["React", "Build interactive user interfaces", "#61dafb"],
  ["MySQL", "Store and manage relational data", "#00758f"],
  ["Excel", "Spreadsheets and data", "#217346"],
  ["DSA", "Data Structures and Algorithms", "#7c3aed"],
];

const examples = {
  HTML: `<h1>This is a heading</h1>
<p>This is a paragraph.</p>`,

  CSS: `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}`,

  JavaScript: `function myFunction() {
  document.getElementById("demo").innerHTML =
    "Hello World!";
}`,

  Python: `if 5 > 2:
    print("Five is greater than two!")`,

  SQL: `SELECT *
FROM Customers
WHERE Country = 'Mexico';`,

  Java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}`,
};

function App() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [activeExample, setActiveExample] = useState("HTML");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredLanguages = languages.filter(([name, description]) =>
    `${name} ${description}`.toLowerCase().includes(search.toLowerCase())
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileMenu(false);
  };

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* TOP NAVIGATION */}
      <header className="topbar">
        <div className="nav-left">
          <button
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            W3<span>Schools</span>
          </button>

          <nav className={mobileMenu ? "main-nav mobile-open" : "main-nav"}>
            <button onClick={() => scrollTo("tutorials")}>
              Tutorials <span>⌄</span>
            </button>
            <button onClick={() => scrollTo("references")}>
              References <span>⌄</span>
            </button>
            <button onClick={() => scrollTo("exercises")}>
              Exercises <span>⌄</span>
            </button>
            <button onClick={() => scrollTo("certificates")}>
              Certificates <span>⌄</span>
            </button>
          </nav>
        </div>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDark(!dark)}
            title="Toggle theme"
          >
            {dark ? "☀" : "☾"}
          </button>

          <button className="nav-link hide-mobile">Spaces</button>
          <button className="nav-link hide-mobile">For Teachers</button>

          <button className="certified-btn hide-mobile">
            Get Certified
          </button>

          <button className="login-btn">Sign In</button>

          <button
            className="menu-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">LEARN • PRACTICE • BUILD</div>

            <h1>Learn to Code</h1>

            <p className="hero-subtitle">
              Free tutorials, examples and references.
            </p>

            <p className="hero-note">
              No sign-up needed, just start learning.
            </p>

            <div className="hero-search">
              <input
                type="text"
                placeholder="Search our tutorials, e.g. HTML"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>⌕</button>
            </div>

            <div className="hero-links">
              <button onClick={() => scrollTo("tutorials")}>
                Browse tutorials →
              </button>
              <button onClick={() => scrollTo("exercises")}>
                Practice coding
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-lock">🔒</div>

            <div className="xp-number">12,560</div>

            <h3>Keep learning. Keep leveling up.</h3>

            <p>Track your progress and achieve more.</p>

            <div className="stats">
              <div>
                <strong>850</strong>
                <span>XP this week</span>
              </div>

              <div className="stat-divider" />

              <div>
                <strong>7</strong>
                <span>🔥 Day streak</span>
              </div>
            </div>

            <button className="card-signin">Sign in</button>

            <div className="dots">
              <i />
              <i />
              <i />
              <i />
              <i className="active" />
            </div>
          </div>
        </div>
      </section>

      {/* APP PROMOTION */}
      <section className="app-promo">
        <div className="promo-icon">⚡</div>

        <div>
          <small>NEW</small>
          <h2>W3Schools Adventure App</h2>
          <p>
            Coding fundamentals as a game. Bite-sized lessons,
            streaks and XP.
          </p>
        </div>

        <div className="promo-buttons">
          <button>App Store</button>
          <button>Google Play</button>
          <button className="learn-more">Learn more →</button>
        </div>
      </section>

      {/* TUTORIALS */}
      <section id="tutorials" className="section tutorials">
        <div className="section-heading">
          <span>01</span>
          <h2>What do you want to learn?</h2>
          <p>
            Pick a language and start right away. Every tutorial is
            packed with examples you can run and edit.
          </p>
        </div>

        <div className="language-grid">
          {filteredLanguages.map(([name, description, color]) => (
            <button
              className={`language-card ${
                activeExample === name ? "selected" : ""
              }`}
              key={name}
              onClick={() => {
                setActiveExample(name);
                scrollTo("examples");
              }}
            >
              <div
                className="language-icon"
                style={{ "--language-color": color }}
              >
                {name === "JavaScript"
                  ? "JS"
                  : name === "TypeScript"
                  ? "TS"
                  : name.slice(0, 2)}
              </div>

              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>

              <span className="arrow">→</span>
            </button>
          ))}

          <button className="language-card more-card">
            <div className="more-icon">+</div>
            <div>
              <h3>And 40+ more</h3>
              <p>Browse all tutorials</p>
            </div>
          </button>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="examples-section">
        <div className="section-heading centered">
          <span>02</span>
          <h2>Learn by doing</h2>
          <p>
            Try examples directly in your browser and experiment
            with the code.
          </p>
        </div>

        <div className="example-tabs">
          {Object.keys(examples).map((name) => (
            <button
              key={name}
              className={activeExample === name ? "active" : ""}
              onClick={() => setActiveExample(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="example-box">
          <div className="example-header">
            <div className="browser-dots">
              <i />
              <i />
              <i />
            </div>

            <span>{activeExample} example</span>
          </div>

          <div className="code-area">
            <pre>
              <code>{examples[activeExample] || examples.HTML}</code>
            </pre>

            <div className="preview">
              <span>LIVE PREVIEW</span>

              <div className="preview-content">
                {activeExample === "HTML" && (
                  <>
                    <h2>This is a heading</h2>
                    <p>This is a paragraph.</p>
                    <button>Try it Yourself »</button>
                  </>
                )}

                {activeExample === "CSS" && (
                  <div className="css-preview">
                    <h2>Styled content</h2>
                    <p>CSS controls the look and layout.</p>
                  </div>
                )}

                {activeExample === "JavaScript" && (
                  <>
                    <h2 id="demo">Hello World!</h2>
                    <button
                      onClick={() =>
                        alert("Hello from JavaScript!")
                      }
                    >
                      Click Me!
                    </button>
                  </>
                )}

                {activeExample === "Python" && (
                  <>
                    <h2>Python Output</h2>
                    <code>Five is greater than two!</code>
                  </>
                )}

                {activeExample === "SQL" && (
                  <>
                    <h2>SQL Query</h2>
                    <p>Customers from Mexico</p>
                  </>
                )}

                {activeExample === "Java" && (
                  <>
                    <h2>Java Output</h2>
                    <p>Hello World!</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="example-footer">
            <button>Try it Yourself »</button>
            <button className="secondary">Learn {activeExample}</button>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section id="references" className="section references">
        <div className="section-heading">
          <span>03</span>
          <h2>References</h2>
          <p>
            Complete references and documentation for the technologies
            you use every day.
          </p>
        </div>

        <div className="reference-grid">
          {[
            ["HTML Reference", "HTML elements, attributes and events"],
            ["CSS Reference", "Properties, selectors and values"],
            ["JavaScript Reference", "Objects, methods and APIs"],
            ["Python Reference", "Functions, modules and syntax"],
            ["SQL Reference", "Commands, functions and operators"],
            ["React Reference", "Components, hooks and APIs"],
          ].map(([title, text]) => (
            <button className="reference-card" key={title}>
              <span className="reference-icon">⌘</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span>→</span>
            </button>
          ))}
        </div>
      </section>

      {/* ACCOUNT */}
      <section className="account-section">
        <div className="account-content">
          <div>
            <span className="eyebrow">FREE ACCOUNT</span>
            <h2>Save your progress. Everywhere.</h2>

            <p>
              Learning is free with or without an account. Sign up to
              keep your XP, streaks and progress across W3Schools.
            </p>

            <div className="benefits">
              <span>✓ Progress tracking</span>
              <span>✓ XP & streaks</span>
              <span>✓ Ad-free learning</span>
              <span>✓ Challenges</span>
              <span>✓ Practice problems</span>
              <span>✓ Leagues</span>
              <span>✓ Build & host websites</span>
            </div>

            <div className="account-actions">
              <button>Sign In</button>
              <button className="outline">Sign Up</button>
            </div>
          </div>

          <div className="progress-card">
            <div className="progress-circle">
              <strong>72%</strong>
              <span>Learning</span>
            </div>

            <div className="progress-info">
              <h3>Your progress</h3>
              <p>Keep going — you're doing great.</p>

              <div className="progress-bar">
                <span />
              </div>

              <small>12,560 XP earned</small>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section certificate-section">
        <div className="section-heading centered">
          <span>04</span>
          <h2>Kickstart your career.</h2>
          <p>
            Get certified by completing a course and document your
            skills with a credential.
          </p>
        </div>

        <div className="certificate-grid">
          <div className="certificate-card">
            <div className="certificate-top">
              <span>W3SCHOOLS</span>
              <strong>CERTIFIED</strong>
            </div>

            <div className="certificate-seal">✓</div>

            <small>Issued by W3Schools</small>
            <h3>Certified HTML Developer</h3>

            <div className="certificate-line" />

            <span>Verified credential you can share</span>
          </div>

          <div className="career-card">
            <span className="eyebrow">CAREER</span>
            <h3>Show what you know.</h3>
            <p>
              Build credibility with certificates designed to
              demonstrate your practical skills.
            </p>

            <button>Get certified →</button>
            <button className="text-button">
              See all certificates
            </button>
          </div>
        </div>
      </section>

      {/* SPACES */}
      <section className="feature-section spaces-section">
        <div className="feature-code">
          <div className="mini-browser">
            <div className="mini-header">
              <i />
              <i />
              <i />
              <span>my-portfolio.w3spaces.com</span>
            </div>

            <div className="mini-code">
              <span>&lt;h1&gt;</span> My Portfolio{" "}
              <span>&lt;/h1&gt;</span>
              <br />
              <br />
              <span>&lt;p&gt;</span> Built with Spaces.{" "}
              <span>&lt;/p&gt;</span>
              <br />
              <br />
              <span className="green">&lt;a&gt;</span> Say hi{" "}
              <span className="green">&lt;/a&gt;</span>
            </div>
          </div>
        </div>

        <div className="feature-content">
          <span className="eyebrow">W3SCHOOLS SPACES</span>
          <h2>Build and host websites.</h2>
          <p>
            Code directly in your browser, nothing to install. When
            you are ready, publish your site with one click.
          </p>

          <div className="feature-list">
            <span>✓ No setup</span>
            <span>✓ Templates to start from</span>
            <span>✓ Hosting included</span>
          </div>

          <button>Try Spaces</button>
          <button className="text-button">Learn more</button>
        </div>
      </section>

      {/* EXERCISES */}
      <section id="exercises" className="practice-section">
        <div className="practice-content">
          <span className="eyebrow">PRACTICE</span>
          <h2>Practice with W3Schools</h2>
          <p>
            Improve your coding skills with exercises, quizzes and
            weekly coding challenges.
          </p>

          <div className="practice-cards">
            <div>
              <strong>Exercises</strong>
              <span>Practice coding problems</span>
            </div>

            <div>
              <strong>Quizzes</strong>
              <span>Test your knowledge</span>
            </div>

            <div>
              <strong>★ +1</strong>
              <span>Earn XP and streaks</span>
            </div>
          </div>

          <button>Start practicing →</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo footer-logo">
              W3<span>Schools</span>
            </div>

            <p>
              Learn to code with free tutorials, references and
              interactive examples.
            </p>
          </div>

          <div className="footer-column">
            <h4>Learn</h4>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>Python</button>
            <button>SQL</button>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <button>References</button>
            <button>Exercises</button>
            <button>Quizzes</button>
            <button>Certificates</button>
            <button>Spaces</button>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <button>About W3Schools</button>
            <button>Contact Us</button>
            <button>Report Error</button>
            <button>Privacy</button>
            <button>Terms</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 W3Schools. All rights reserved.</span>

          <div>
            <button>LinkedIn</button>
            <button>Instagram</button>
            <button>YouTube</button>
            <button>Facebook</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;