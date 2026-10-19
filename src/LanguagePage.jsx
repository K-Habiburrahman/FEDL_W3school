import { useState } from 'react';

const lessons = {
  HTML: {
    title: 'HTML Tutorial', subtitle: 'Learn HTML — the standard markup language for creating web pages.', color: '#e44d26', intro: 'HTML describes the structure of a webpage using elements and tags. It gives content its meaning: headings, paragraphs, links, images, lists and forms.',
    topics: ['HTML Introduction', 'HTML Editors', 'HTML Basic Examples', 'HTML Elements', 'HTML Attributes', 'HTML Headings', 'HTML Paragraphs', 'HTML Links', 'HTML Images', 'HTML Lists', 'HTML Tables', 'HTML Forms'],
    code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>This is my first paragraph.</p>\n  <a href="https://example.com">Visit example</a>\n</body>\n</html>',
    output: 'Hello World!\nThis is my first paragraph.\nVisit example',
    next: 'CSS'
  },
  CSS: {
    title: 'CSS Tutorial', subtitle: 'Learn CSS — style beautiful, responsive webpages.', color: '#1572b6', intro: 'CSS (Cascading Style Sheets) controls how HTML elements look. Use it to style colors, fonts, spacing, borders, layouts and responsive designs.',
    topics: ['CSS Introduction', 'CSS Syntax', 'CSS Selectors', 'CSS Colors', 'CSS Backgrounds', 'CSS Borders', 'CSS Margins', 'CSS Padding', 'CSS Box Model', 'CSS Text', 'CSS Flexbox', 'CSS Grid', 'Responsive Design'],
    code: 'body {\n  font-family: Arial, sans-serif;\n  background: #f0f9ff;\n}\n\nh1 {\n  color: #1572b6;\n  text-align: center;\n}\n\n.card {\n  padding: 24px;\n  border-radius: 12px;\n}', output: 'CSS styles the page: blue centered heading, light background and rounded cards.', next: 'JavaScript'
  },
  JavaScript: {
    title: 'JavaScript Tutorial', subtitle: 'Learn JavaScript — make webpages interactive.', color: '#b59b00', intro: 'JavaScript is a programming language for adding behavior to websites. It can respond to clicks, update page content, validate forms and work with data.',
    topics: ['JS Introduction', 'JS Variables', 'JS Let and Const', 'JS Operators', 'JS Data Types', 'JS Functions', 'JS Objects', 'JS Arrays', 'JS Conditions', 'JS Loops', 'JS Events', 'DOM Manipulation', 'Async JavaScript'],
    code: 'const button = document.querySelector("#hello");\nconst message = document.querySelector("#message");\n\nbutton.addEventListener("click", () => {\n  message.textContent = "Hello, JavaScript!";\n});', output: 'Click the button to change this message.', next: 'Python'
  },
  C: {
    title: 'C Tutorial', subtitle: 'Learn C — a fast, foundational programming language.', color: '#555b65', intro: 'C is a general-purpose language often used for operating systems, embedded devices and performance-sensitive software. It teaches core programming concepts clearly.',
    topics: ['C Introduction', 'C Setup', 'C Syntax', 'C Output', 'C Variables', 'C Data Types', 'C Constants', 'C Operators', 'C If Else', 'C Switch', 'C While Loop', 'C For Loop', 'C Functions', 'C Arrays', 'C Pointers', 'C Structures'],
    code: '#include <stdio.h>\n\nint main(void) {\n    const char *name = "World";\n    printf("Hello, %s!\\n", name);\n    return 0;\n}', output: 'Hello, World!', next: 'Python'
  },
  Python: {
    title: 'Python Tutorial', subtitle: 'Learn Python — readable code for apps, data, automation and AI.', color: '#3776ab', intro: 'Python is a popular high-level language known for readable syntax. It is used in web development, scripting, data analysis, machine learning and automation.',
    topics: ['Python Introduction', 'Python Install', 'Python Syntax', 'Python Variables', 'Python Data Types', 'Python Strings', 'Python Operators', 'Python Lists', 'Python Tuples', 'Python Dictionaries', 'Python If Else', 'Python While Loop', 'Python For Loop', 'Python Functions', 'Python Classes', 'Python Modules'],
    code: 'def greet(name):\n    return f"Hello, {name}!"\n\nuser = "World"\nprint(greet(user))', output: 'Hello, World!', next: 'Java'
  },
  Java: {
    title: 'Java Tutorial', subtitle: 'Learn Java — build applications with object-oriented programming.', color: '#e76f00', intro: 'Java is a class-based, object-oriented language designed to run across platforms with a Java Virtual Machine. It is widely used for backend, enterprise and Android development.',
    topics: ['Java Introduction', 'Java Install', 'Java Syntax', 'Java Output', 'Java Comments', 'Java Variables', 'Java Data Types', 'Java Type Casting', 'Java Operators', 'Java Strings', 'Java If Else', 'Java While Loop', 'Java For Loop', 'Java Arrays', 'Java Methods', 'Java Classes and Objects', 'Inheritance'],
    code: 'public class Main {\n    public static void main(String[] args) {\n        String name = "World";\n        System.out.println("Hello, " + name + "!");\n    }\n}', output: 'Hello, World!', next: 'HTML'
  }
};

export default function LanguagePage({ language }) {
  const data = lessons[language];
  const [completed, setCompleted] = useState([]);
  const [tryOutput, setTryOutput] = useState(false);
  const [activeTopic, setActiveTopic] = useState(data.topics[0]);
  return <main className="lesson-page" style={{'--lesson-color': data.color}}>
    <aside className="lesson-sidebar"><h3>{language} Tutorial</h3><p className="sidebar-progress">{completed.length} of {data.topics.length} lessons completed</p><div className="progress-track"><span style={{width: `${completed.length / data.topics.length * 100}%`}} /></div>{data.topics.map((topic, i) => <button key={topic} className={activeTopic === topic ? 'topic active-topic' : 'topic'} onClick={() => setActiveTopic(topic)}><span>{topic}</span>{completed.includes(topic) && <b>✓</b>}</button>)}</aside>
    <article className="lesson-content"><div className="lesson-breadcrumb">Tutorials / {language}</div><div className="lesson-heading"><span className="lesson-kicker">LEARN {language.toUpperCase()}</span><h1>{data.title}</h1><p>{data.subtitle}</p><div className="lesson-actions"><button className="primary-lesson" onClick={() => setActiveTopic(data.topics[0])}>❮ Home</button><button className="next-lesson" onClick={() => {window.location.href = `/${data.next.toLowerCase()}`}}>Next ❯</button></div></div>
    <section className="lesson-intro"><h2>{activeTopic}</h2><p>{activeTopic === data.topics[0] ? data.intro : `${activeTopic} is an important part of ${language}. Read the example, experiment with the syntax, and practise by changing the code.`}</p><button className="complete-button" onClick={() => setCompleted(old => old.includes(activeTopic) ? old.filter(x => x !== activeTopic) : [...old, activeTopic])}>{completed.includes(activeTopic) ? '✓ Lesson completed — undo' : 'Mark lesson as completed'}</button></section>
    <section className="code-lesson"><div className="code-title"><div><span className="code-dot"/><span className="code-dot"/><span className="code-dot"/></div><strong>{language} Example</strong></div><pre><code>{data.code}</code></pre><button className="run-example" onClick={() => setTryOutput(v => !v)}>{tryOutput ? 'Hide output' : '▶ Try it yourself'}</button>{tryOutput && <div className="output-panel"><strong>Example output</strong><pre>{data.output}</pre></div>}</section>
    <section className="lesson-topics"><h2>What you'll learn</h2><p>Follow the lessons in order, mark each one as complete, and revisit examples whenever you need practice.</p><div className="topic-grid">{data.topics.map((topic, i) => <button key={topic} onClick={() => {setActiveTopic(topic); window.scrollTo({top:0,behavior:'smooth'})}} className={completed.includes(topic) ? 'topic-card done' : 'topic-card'}><span className="topic-number">{String(i + 1).padStart(2, '0')}</span><span>{topic}</span><span>{completed.includes(topic) ? '✓' : '→'}</span></button>)}</div></section>
    <div className="lesson-bottom"><span>Ready for the next step?</span><a href={`/${data.next.toLowerCase()}`}>Continue to {data.next} →</a></div>
    </article>
  </main>;
}
