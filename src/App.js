import React from 'react';
import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Welcome to my portfolio!</p>
      </header>
      <section className="App-content">
        <Skills />
        <Projects />
        <ContactForm />
      </section>
      <footer className="App-footer">
        {/* Add your contact information or links to social profiles */}
      </footer>
    </div>
  );
}

export default App;
