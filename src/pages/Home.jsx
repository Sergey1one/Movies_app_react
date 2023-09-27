import { Loader } from "components/Loader/Loader"
import { MovieList } from "components/Movie/MovieList"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getTrendingMovies} from "services/serviceAPI"
import Status from "services/Status"




const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const[totalPages,setTotalPages]=useState(0)
    const [error, setError] = useState(null);
    const [status,setStatus]=useState(Status.IDLE)

    
    
    const page = new URLSearchParams(location.search).get('page') ?? 1;

   
    //  useEffect(()=>{getTrendingMovies().then(setMovies)},[])

    useEffect(() => {
        setStatus(Status.PENDING);
        const fetchTrendingMovies = async () => {
            try {
                const response = await getTrendingMovies(page);
                const {results,total_pages}=response
                setMovies(results);
                setTotalPages(total_pages)
                setStatus(Status.RESOLVED)
            }
            catch (e) {
                setError("Something get wrong, try again")
                setStatus(Status.REJECTED)
            }
        }
        fetchTrendingMovies()
    },[page])
    
  
    console.log(totalPages)

    return (<div>
        {status === Status.PENDING && <Loader/>}
        {status === Status.RESOLVED && <MovieList movies={movies}></MovieList>}
        {status===Status.REJECTED&&<div>{error}</div>}
       
 </div>
        
    )
}

export default Home