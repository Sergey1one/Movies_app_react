import { MovieList } from "components/Movie/MovieList";
import { SearchBar } from "components/SearchBar/SearchBar"
import { useSearchParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { getMovieByName } from "services/serviceAPI";





const Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [inputQuery, setInputQuery] = useState('');
    const[movies,setMovies]=useState([])
    
    // const movieSubmit =(newSearch) => {
    //     if (inputQuery === newSearch) {
    //     return
    //     }
    //     setInputQuery(newSearch)
    // }
    
    useEffect(() => {
        const currentQuery=searchParams.get('query')
        if (!currentQuery) { return }
        const fetchMoviebyName = async () => {
            try {
                const movieByName = await getMovieByName(currentQuery);
                setMovies(movieByName)
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchMoviebyName();
    },[searchParams])
    



     
    return (
        <> <SearchBar setSearchParams={setSearchParams} />
        <MovieList movies={movies}/>
        </>
       
    )
}


export default Movie