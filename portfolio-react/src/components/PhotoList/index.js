import React from 'react'


function PhotoList() {

    const photos = [
        {
            title: 'Simple Doc',
            filename: 'simple-doc',
            description: 'Manages small hospital for doctors, nurses, and patients'
        },
        {
            title: 'Eat in Peace',
            filename: 'eat-in-peace',
            description: 'Helps users to track their diet based on thier BMI'
        },
        {
            title: 'Weather Dashboard',
            filename: 'weather-dashboard',
            description: 'Checks weather in cities all over the world using third party API'
        },
        {
            title: 'Team Generator',
            filename: 'team-generator',
            description: 'Generates a profile of all team members'
        },
        {
            title: 'Run Buddy',
            filename:'run-buddy',
            description: 'a front-end html for a trainer matching business'
        }
    ]
    console.log("photoname: ", photos[0].title)
    return (
        <div className="flex-row">
            {photos.map((photo)=> { 
            <img
            src={`../../assets/images/${photo.filename}.jpg`}
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