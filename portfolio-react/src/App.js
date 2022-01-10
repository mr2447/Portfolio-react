import React, {useState} from 'react'
import './assets/css/App.css';
import About from './components/About'
import ContactForm from './components/Contact'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

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
  const [contactSelected, setContactSelected] = useState(false)
  const [aboutSelected, setAboutSelected] = useState(true)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [resumeSelected, setResumeSelected] = useState(false)
  return (
    <div className="flex-wrapper">
      <Nav  
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
     <main>
      {contactSelected && <ContactForm></ContactForm>}
        
      {aboutSelected && <About></About>}
         
      {portfolioSelected && <Portfolio currentSection></Portfolio>}

      {resumeSelected && <Resume currentSection></Resume>}

     </main>
     <footer>
     <h2>Made by Marvin Ren with React.</h2>
     </footer>
    </div>
  );
}

export default App;
