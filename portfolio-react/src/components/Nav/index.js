import React, { useEffect }from 'react';

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection,
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
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {sections.map((section) => (
                        <li className={`mx-1 ${
                            currentSection.name === section.name && 'navActive'
                        }`} key={section.name}>
                            {/* onClick expects a callback function */}
                            <span onClick={()=> {
                                setCurrentSection(section)
                                categorySelected(section.name)
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