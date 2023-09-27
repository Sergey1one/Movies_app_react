import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom"
import { getMovieCast } from "services/serviceAPI";




 const Cast = () => {
    const { movieId } = useParams()
    const [cast, setCast] = useState([]);
    useEffect(() => {
        async function fetchCast() {
            const responce = await getMovieCast(movieId).then(r => setCast(r.cast));
            return responce
        }
        fetchCast()
    }
        , [movieId])
    

   console.log(cast)



    return (<div>
       
        {cast.map(({name,character,profile_path}) => {
            return (
                <div>
                    <h3>{name}</h3>
                    <p>{character}</p>
                    <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={ `${name}`} />
            </div>
        )
    })}</div>)
}

export default Cast