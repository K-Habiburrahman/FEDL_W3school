import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LanguagePage from './LanguagePage.jsx';
import './pages.css';

const languages = ['HTML', 'CSS', 'JavaScript', 'C', 'Python', 'Java'];
function SiteNav() {
  return <>
    <header className="site-top"><a className="site-logo" href="/">W3<span>Schools</span></a><span className="site-tagline">Learn to code, one step at a time</span><a className="home-link" href="/">Home</a></header>
    <nav className="site-language-nav" aria-label="Programming language pages">
      {languages.map((language) => <a key={language} href={`/${language.toLowerCase()}`}>{language}</a>)}
    </nav>
  </>;
}
function Layout({ children }) { return <><SiteNav />{children}</>; }
export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<HomePage />} />
    {languages.map(language => <Route key={language} path={`/${language.toLowerCase()}`} element={<Layout><LanguagePage language={language} /></Layout>} />)}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></BrowserRouter>;
}
