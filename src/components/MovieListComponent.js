import React from 'react'
import MovieCard from './MovieCard'

const MovieListComponent = ({ movieList, minDuration }) => {
    return (
        <div className='movie-list'>
            {
                movieList.map(movie => {
                    const { title, duration, slug } = movie;
                    if (duration > minDuration) {
                        return (
                            <MovieCard
                                key={slug}
                                title={title}
                                duration={duration} />
                        );
                    }
                })
            }

        </div>
    )
}

export default MovieListComponent

MovieListComponent.defaultProps = {
    minDuration: 5500
}