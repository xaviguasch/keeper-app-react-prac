import React from 'react'
import ReactDOM from 'react-dom'

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} />
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <h1>My Contacts</h1>
        <Card
            name='Beyonce'
            img='https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg'
            phone='+123 456 789'
            email='b@beyonce.com'
        />
        <Card
            name='Rihanna'
            img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rihanna-attends-the-fenty-beauty-by-rihanna-event-at-news-photo-1033343016-1563977176.jpg?crop=0.692xw:1.00xh;0.133xw,0&resize=480:*'
            phone='+555 555 789'
            email='r@rihanna.com'
        />
    </div>,
    document.getElementById('root')
)
