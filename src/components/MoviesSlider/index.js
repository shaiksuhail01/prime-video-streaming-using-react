import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {movieDetails} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slidesContainer">
      <Slider {...settings}>
        {movieDetails.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieItemDetails={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
