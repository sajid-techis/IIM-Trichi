import React from 'react'

const VideoComponent = () => {
    return (
        <div className='relative videocomponet'>
            <video muted autoPlay loop poster="/sites/default/files/poster.webp" playsInline preload="none" className="relative w-full h-full">
                <source src="https://www.iimcal.ac.in/sites/default/files/videos/1920px_920px.webm" type="video/webm"  />
            </video>
            <p className='text-white text-2xl'>Welcome To <br/> <span className='text-6xl font-bold tracking-wide'>IIM Tiruchirappalli</span></p>
        </div>
    )
}

export default VideoComponent
