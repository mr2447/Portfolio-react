import React from 'react'


function PhotoList() {

    const photos = [
        {
            title: 'Simple-Doc',
            description: 'Manages small hospital for doctors, nurses, and patients'
        },
        {
            title: 'Eat in Peace',
            description: 'Helps users to track their diet based on thier BMI'
        },
        {
            title: 'Weather Dashboard',
            description: 'Checks weather in cities all over the world using third party API'
        },
        {
            title: 'Team Generator',
            description: 'Generates a profile of all team members'
        },
        {
            title: 'Run Buddy',
            description: 'a front-end html for a trainer matching business'
        }
    ]
    console.log("photoname: ", photos[0].title)
    return (
        <div className="flex-row">
        
            {photos.map((photo)=> {
            <img
            src={require(`../../assets/images/${photo.title}.jpeg`)}
            alt={photo.title}
            className="img-thumbnail mx-1"
            key={photo.title}
            >
            <span>{photo.description}</span>
            </img>
            })} 
        </div>
    )
}

export default PhotoList;