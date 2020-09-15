import React from 'react'

const MovieCard = ({ title, duration }) => {
    return (
        <div className='movie-card'>
            <h2>
                {title ? title : 'No title yet'}
               :({duration ? duration : '00'}s)
            </h2>
        </div>
    )
}

export default MovieCard
