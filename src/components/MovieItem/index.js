import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieItemDetails} = props
  const {thumbnailUrl, videoUrl} = movieItemDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="triggerButton">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modalContainer">
            <button
              type="button"
              data-testid="closeButton"
              className="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="20" />
            </button>
            <div className="videoContainer">
              <ReactPlayer
                url={videoUrl}
                className="videoUrl"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
