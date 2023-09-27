import{ useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "services/serviceAPI";



 const Reviews = () => {
    const { movieId } = useParams()
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        async function fetchReviews() {
            const resp = await getMovieReviews(movieId).then(r => setReviews(r.results));
            return resp
        }
        fetchReviews();
    }, [movieId])
    
    console.log(reviews)

    return (
        <div>{reviews.map(({author,content,id}) => {
            return (<div key={id}><h3>{author}</h3>
                <p>{content}</p>
            </div>    )
               
            
        })}</div>
    )
}

export default Reviews