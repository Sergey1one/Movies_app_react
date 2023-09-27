import { useState ,useRef,useEffect, Suspense} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom'
import { getMovieById } from 'services/serviceAPI';
import Status from 'services/Status';
import { Loader } from 'components/Loader/Loader';
import { BackLinkButton, GenresContainer, MovieDescContainer, MovieDetailsContainer, MovieDetailsLink, MovieInfo, MovieInfoTitle, MoviePoster, MovieTitle ,MovieDetailsLinkContainer} from './MovieDetails.styled';
import noImage from '../../images/poster_coming.jpg'

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('')
    const [status, setStatus] = useState(Status.IDLE)
    const[error,setError]=useState(null)
    const location = useLocation()
    const backLinkRef = useRef(location.state?.from ?? '/movies')
    
   
    useEffect(() => { 
        
        setStatus(Status.PENDING);
        const fetchMovieById = async () => {
            try {
                const response = await getMovieById(movieId);
                setMovie(response);
                setStatus(Status.RESOLVED)
            }
            catch (e) {
                 setError("Something get wrong, try again")
                setStatus(Status.REJECTED)
            }
        }
           fetchMovieById()
     }, [movieId])
    
    
 
    
    return (
        <>
            <BackLinkButton>
                <Link to={backLinkRef.current}> &#11013; Go back </Link>
            </BackLinkButton>
       
           {status === Status.PENDING && <Loader/>}
            {status === Status.RESOLVED && 
                <>
                    <MovieDetailsContainer>
                    <MoviePoster src={movie.poster_path ?
                        `https://image.tmdb.org/t/p/w300/${movie.poster_path}` :
                        `${noImage}`} alt={`${movie.title}`} />
                    <MovieDescContainer>
                         <MovieTitle>{movie.title}</MovieTitle>
                <MovieInfoTitle>TagLine</MovieInfoTitle><MovieInfo>{movie.tagline}</MovieInfo>
                    <MovieInfoTitle>Rate</MovieInfoTitle><MovieInfo>{movie.vote_average}</MovieInfo>
                    <MovieInfoTitle>Overview</MovieInfoTitle><MovieInfo>{movie.overview}</MovieInfo>
                    <MovieInfoTitle>Genres</MovieInfoTitle><GenresContainer>{movie && movie.genres.map(genre => {
                        return (
                            <li key={genre.name} style={{ padding: '4px' }}>
                              <MovieInfo>{genre.name}</MovieInfo>  </li>
                        )
                    })}</GenresContainer>
           </MovieDescContainer>
          </MovieDetailsContainer>
            <MovieDetailsLinkContainer>
                <li>
                    <MovieDetailsLink to='cast'>Cast</MovieDetailsLink>
                </li>
                <li>
                    <MovieDetailsLink to='reviews'>Reviews</MovieDetailsLink>
                </li>
                </MovieDetailsLinkContainer> 
                <Suspense fallback={<Loader/>}>
<Outlet /> 
                </Suspense>
                
           </>     
       }
            {status===Status.REJECTED&&<div>{error}</div>}
        </>
    )
}

export default MovieDetails