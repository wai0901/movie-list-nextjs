import React from 'react';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import { getMovies } from '../action/index';

const Home = (props) => {

    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu 
                                appName={'Movie DB'}
                            />
                        </div>
                        <div className="col-lg-9">
                            <Carousel images={props.images || []}/>
                            <div className="row">
                                <MovieList 
                                    movies={props.movies || []}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.getInitialProps = async () => {
    const movies = await getMovies();
    const images = movies.map(movie => 
        ({id: `image-${movie.id}`, image: movie.image}));

    return {
        movies,
        images
    }
}

export default Home
