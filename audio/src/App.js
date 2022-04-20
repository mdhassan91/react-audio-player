import logo from './logo.svg';
import './App.css';

import {useState,useEffect} from 'react';
import Player from './Player';

function App() {
  const data=[
  {
    title: 'Fairy Tail',
    artist: 'Fairy Tail',
    img:"./images/fairytail.jpg",
    track_src:"./music/fairy-tail-theme.mp3",
  },
  {
    title: 'OnePiece-zoro',
    artist: 'Zoro',
    img:"./images/Onepiece-zoro.jpg",
    track_src:"./music/OnePieceOSTTheVeryVeryVeryStrongestextended-arabix.mp3",
  }, 
   {
    title: 'Scissor Seven',
    artist: 'Scissor7',
    img:"./images/scissor7.jpg",
    track_src:"./music/Scissor Seven ! Opening ! Season 3 ! Instrumental Song.mp3",
  },
  
  ]
  const [songs,setSongs]=useState(data)
  const [currentSongIndex,setCurrentSongIndex]=useState(0)
  const [nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1)


  useEffect(() =>{
setNextSongIndex(()=>{
  if(currentSongIndex+1>songs.length-1){
    return 0;
  }
  else{
return currentSongIndex+1;

  }
})

  },[currentSongIndex])

  return (
    <div className="App">
<Player 
currentSongIndex={currentSongIndex}
setCurrentSongIndex={setCurrentSongIndex}
nextSongIndex={nextSongIndex}
songs={songs}



// song={songs[currentSongIndex]}
//  nextSong={songs[nextSongIndex]}
 />
    </div>
  );
}

export default App;
