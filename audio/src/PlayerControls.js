import { FaPlay,FaBackward, FaForward,FaPause} from 'react-icons/fa';

function PlayerControls(props){
    return(
    <div  className="player-controls">
        <button className="skip-btn " onClick={() =>{props.SkipSong(false)}}>
            <FaBackward />

             </button >
            <button className="play-btn"
            style={
              {
                display: "flex",
                margin:"0 30px" ,
                padding:"20px",
               borderRadius:"50%",
                border: "none",
                outline: "none",
                backgroundColor: 'yellow',
                color: "white",
                fontSize: "24px",
              }  
            }  
            onClick={()=>{props.setIsPlaying(!props.isPlaying);}}>
              
               {props.isPlaying? <FaPause/>:<FaPlay />} 
            </button>
            <button className="skip-btn " onClick={() =>{props.SkipSong()}}>
            <FaForward/>
            </button>


    </div>
    );
}
export default PlayerControls;