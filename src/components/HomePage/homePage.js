
import React from 'react'
import video from '../public/videos/Dating_Intro_3.mp4'

function HomePage () {
  return (
    <div className='homepage1' >
      <video src={ video } autoPlay loop muted />
    </div>
  )
}

// <video src='/videos/Dating_Intro.mp4' autoPlay loop muted />
export default HomePage
