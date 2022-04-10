import ReactPlayer from "react-player/lazy"

const UploadPage = () =>{
    return(
        // <h1>hello</h1>
        <div className=" w-full mt-28 bg-black flex items-center justify-center">
            {/* <ReactPlayer url={'/video/Jujutsu Kaisen 0 Movie - Official Trailer 2.mp4'} height={400} width={800} playing={true} controls={true} playIcon/> */}
            <ReactPlayer url={'/video/test.mp4'} height={900} width={'100%'} playing={true} controls={true} playIcon/>
            
            {/* <ReactPlayer url={'https://www.youtube.com/embed/5qap5aO4i9A'} playing={true} controls={true} playIcon height={500} width={'100%'}/> */}
            {/* <ReactPlayer url={'https://youtu.be/5qap5aO4i9A'} playing={true} controls={true} height={500}  width={'100%'}/> */}
            {/* <iframe src="https://www.nimo.tv/embed/47421664" frameborder="0" scrolling="false" allow="fullscreen" allowfullscreen="true" width="100%" height="100%" ></iframe> */}
        </div>
    )
}

export default UploadPage

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/hm1na9R2uYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
