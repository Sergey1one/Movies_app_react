import {Link, useLocation} from 'react-router-dom'
import { MovieImage, MovieItemContainer, MovieName } from './MovieList.styled'
import noImage from '../../images/poster_coming.jpg'

const MovieItem = ({ movie }) => {
    
   const location=useLocation()

    


    return (
        <MovieItemContainer key={movie.id}>
             <Link state={{from:location}} to={`/movies/${movie.id}`} >
                <MovieImage src={movie.poster_path ?
                    `https://image.tmdb.org/t/p/w300/${movie.poster_path}`:
                    `${noImage}`} alt={`${movie.title}`} />
             
            </Link>
            <MovieName>{movie.title}</MovieName>
       </MovieItemContainer>
    )
}

export default MovieItem