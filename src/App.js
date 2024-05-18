import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useState } from 'react';
import envtt from './en.vtt?url';
import './App.css';

function App() {
  const [video,setVideo] = useState("");
  const [caption,setCaption] = useState("");
 const [flag,setFlag] = useState(false);
 const [trackLang,setTrackLang] = useState();
 useEffect(()=>{
  // const tracks = player.current.getInternalPlayer()?.textTracks;

 })
 const handleClick=()=>{
   if(flag === false){
    setFlag(true);
   }else{
    setFlag(false);
   }
 }

  return (
    <div className="App">
    <h1>Enter Captions:</h1>
    <input type='text' value={caption} onChange={(e)=>setCaption(e.target.value)}/>
    <h1>Enter URL: </h1>
    <input type='text' value={video} onChange={(e)=>setVideo(e.target.value)}/>
  <ReactPlayer url={video} width="550px" height="550px" controls={true} playing={flag}
  config={{file:{
    attributes:{
      crossOrigin: "anonymous"
    },
    tracks: [
      {
       kind: 'subtitles',    src: 'subs/subtitles.en.vtt',
       content:'text'
   , srcLang: "en", default:true
      }
    ]
  }}}
  
  
  />
 <button onClick={handleClick}>Play/Stop</button>
    </div>
  );
}

export default App;