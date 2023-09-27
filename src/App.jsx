
import {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'

// import { Cast } from './components/Cast/Cast';
import { Layout } from './components/Layot/Layout';


const Home = lazy(() => import('./pages/Home'))
const Movie = lazy(() => import('./pages/Movie'))
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./components/Cast/Cast'))
const Reviews=lazy(()=>import('./components/Reviews/Reviews'))
export const App = () => {
  return (
    <div>
     
     
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
        
        <Route path='movies' element={<Movie/>} />
          <Route path='movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast/>} />
            <Route path='reviews' element={<Reviews />} />
            </Route>
       </Route>
          
       
       
        
      </Routes>

       
    </div>
  );
};
