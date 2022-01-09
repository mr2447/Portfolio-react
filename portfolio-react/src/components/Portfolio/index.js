import React from 'react';
import photo from '../../assets/images/simple-doc-port.jpeg'


function Portfolio(props) {
    const currentWork = {
        name: "Simple Doc",
        description: "Manages small hospital Patience, Nurses and Doctors."
    };
    return(
        <section>
            <h1>{currentWork.name}</h1>
            <p>{currentWork.description}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Simple Doc"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}
export default Portfolio
