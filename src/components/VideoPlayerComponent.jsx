

export default function VideoPlayerComponent({videoSrc, videoTitle}) {
  return (
    <div className="videoplayer">
        <iframe src={videoSrc} title={videoTitle} frameBorder="0" allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
      
    </div>
  )
}

