import React from 'react';
import './styles/main.scss';
import Header from './components/shell/Header';
import Footer from './components/shell/Footer';
import About from './page-components/About';
import Projects from './page-components/Projects';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
