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
  const [contactSelected, setContactSelected] = useState(false)
  return (
    <div>
      <Nav  
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
     <main>
       {!contactSelected ? (
         <>
            <Portfolio currentSection></Portfolio>
            <About></About>
         </>
       ) : (
            <ContactForm></ContactForm>
      )}
 
     </main>
     <footer>
     <h2>Made by Marvin Ren with React.</h2>
     </footer>
    </div>
  );
}

export default App;
