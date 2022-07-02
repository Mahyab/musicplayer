import React ,{useState , useEffect ,useRef} from 'react'
import PlayDetails from './PlayDetails'
import PlayControls from './PlayControls'
function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying,setIsPlaying]=useState(false);
    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play();
        }else {
            audioEl.current.pause();
        }
    });
    const SkipSong = (forwards = true) => {
        if(forwards ) {
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex;
                temp++;
                if(temp > props.songs.length -1) {
                    temp = 0;
                }
                return temp;
            });
        }else{
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex;
                temp--;
                if(temp < 0) {
                    temp = props.song.length -1 ;
                }
                return temp;
            });
        }
    }
  return (
    <div className='c-player'>
      <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <h4>playing now </h4>
      <PlayDetails song={props.songs[props.currentSongIndex]}/>
      <PlayControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <p><strong> Next up : </strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
    </div>
  )
}

export default Player
