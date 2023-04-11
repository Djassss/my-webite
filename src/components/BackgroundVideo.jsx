import React from 'react'


import myVideo from '../videos-img/massimo_video.mp4'


const BackgroundVideo = () => {
  return (
    <div className='backgroundVideo'>
        <div className='overlay'></div>
        <video src={myVideo} muted autoPlay loop></video>
    </div>
  )
}

export default BackgroundVideo;