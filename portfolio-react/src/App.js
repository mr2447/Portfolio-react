import React, {useState} from 'react'
import './assets/css/App.css';
import About from './components/About'
import ContactForm from './components/Contact'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'

function App() {
  const [sections] =useState([
    {
      name: 'Portfolio',
    },
    {
      name: 'Resume'
    }
]);

  const [currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div>
      <Nav  
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}></Nav>
     <main>
       <About></About>
       <ContactForm></ContactForm>
       <Portfolio currentSection></Portfolio>
     </main>
    </div>
  );
}

export default App;
