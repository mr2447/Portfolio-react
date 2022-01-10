import React, { useEffect }from 'react';

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection,
        contactSelected,
        setContactSelected
    } = props;
    
    useEffect(()=> {
        document.title = currentSection.name
    }, [currentSection])

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Marvin Ren's Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={()=> setContactSelected(true)}>Contact</span>
                    </li>
                    {sections.map((section) => (
                        <li className={`mx-1 ${
                            currentSection.name === section.name && !contactSelected && 'navActive'
                        }`} key={section.name}>
                            {/* onClick expects a callback function */}
                            <span onClick={()=> {
                                setCurrentSection(section)
                                categorySelected(section.name)
                                setContactSelected(false)
                            }}
                            >
                            {section.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;