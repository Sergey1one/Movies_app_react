import { useLocation } from "react-router-dom"
import { MovieListContainer } from "./MovieList.styled";
import MovieItem from "./MovieItem"


export const MovieList = ({ movies }) => {

    const location = useLocation();
  
    return (
        <MovieListContainer>
            
            {movies.map(movie => {
                return (
                    <MovieItem movie={movie} key={movie.id} location={ location} />
            )})}
        </MovieListContainer>
    )

}

