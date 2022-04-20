import React from "react";

const imgStyle={
    // position : "relative",
 
    margin: "0 auto", 
    width: "200px",
    //  borderRadius: "50%",
    maxWidth: "250px",}



function PlayerDetails(props){
    return(    <div className="player-details">
    <div className="img-details"  style={imgStyle}>
        <img  style={imgStyle} src={props.song.img} alt={props.song.title}/>
    </div>
<h3 className="title">{props.song.title} </h3>
<h4 className="artist">{props.song.artist} </h4>
</div>)

}
export default PlayerDetails;
