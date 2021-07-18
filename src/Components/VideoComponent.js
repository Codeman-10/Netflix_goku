import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { PlayIcon } from '@heroicons/react/solid'
import Modal from 'react-bootstrap/Modal'
import "./Styles/Row.css"
import axios from "../Backend/axios.js";
import './Styles/Modal.css'

function VideoComponent({ MovieName, MovieId, videoType, posterPath, backpath, IsLargeRow }) {
  const base_Url = "https://image.tmdb.org/t/p/original/"
  const [hover, setHover] = useState(false);
  const [movietrailer, setmovietrailer] = useState(undefined);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const baseVideo_url = `https://api.themoviedb.org/3/${videoType}/${MovieId}/videos?api_key=56299b69e9ed4f02f26dead94bb6c370&language=en-US`
  const base_YoutubeURL = `https://www.youtube.com/embed/${movietrailer}`
  const [timeout, settimeout] = useState(undefined);

  async function fetchData() {
    const request = await axios.get(baseVideo_url)
    setmovietrailer(request.data.results[0]?.key);

    return request;
  }


  const MyVerticallyCenteredModal = (props) => (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">

          <h3>{props.head}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <iframe

            width="720"
            height="503"
            src={base_YoutubeURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>

          </iframe>
        </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  )


  function handleonHover() {
    fetchData()
    if (!timeout) {
      var time = window.setTimeout(function () {
        setHover(true)
      }, 500);
      settimeout(time)
    }
  }
  function handleoffHover() {
    setHover(false)
  }
  function handleTrailerModal() {
    setShowTrailerModal(!showTrailerModal)
    if (!showTrailerModal) {
      handleoffHover()
    }
  }


  return (
    <ReactCardFlip isFlipped={hover} flipDirection="vertical" flipSpeedFrontToBack={1}
    >
      <div
        onMouseEnter={handleonHover}
        onMouseLeave={() => {
          if (timeout) {
            clearInterval(timeout);

            settimeout(undefined)
          }
        }}
      >
        <img
          className={`row_poster ${IsLargeRow && "row_posterLarge"}`}
          src={`${base_Url}${IsLargeRow ? posterPath : backpath}`}
          alt={MovieName}
        />
      </div>
      <div className="trailer"
        onMouseLeave={handleoffHover}
      >
        <img
          className={`row_poster_opaq ${IsLargeRow && "row_posterLarge"}`}
          src={`${base_Url}${IsLargeRow ? posterPath : backpath}`}
          alt={MovieName}
        />
        <div className="play" >

          <PlayIcon className="video_play_icon" onClick={handleTrailerModal} F />
          <p>Play Trailer
          </p>

          <MyVerticallyCenteredModal
            show={showTrailerModal}
            onHide={handleTrailerModal}
            head={MovieName}
          />

        </div>
      </div>
    </ReactCardFlip>
  )
}

export default VideoComponent
