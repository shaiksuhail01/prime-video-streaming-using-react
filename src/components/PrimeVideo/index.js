import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const filterActionMovies = () => {
    const actionsMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    return <MoviesSlider movieDetails={actionsMoviesList} />
  }

  const filterComedyMovies = () => {
    const comedyMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    return <MoviesSlider movieDetails={comedyMoviesList} />
  }
  return (
    <div className="primeVideoContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primeImage"
      />
      <h1 className="headingText">Action Movies</h1>
      {filterActionMovies()}
      <h1 className="headingText">Comedy Movies</h1>
      {filterComedyMovies()}
    </div>
  )
}
export default PrimeVideo
