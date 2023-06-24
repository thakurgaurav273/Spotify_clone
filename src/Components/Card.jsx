import { useState } from "react";
import "../App.css";
import playButton from "../Spotify_play_button.png";

function Card(props) {
    const [isVisible, setVisible] = useState("hidden");
    return (
        <>
            <a key={props.key} href="/">
                <div  className="card" onMouseEnter={() => setVisible("visible")} onMouseLeave={() => setVisible("hidden")}>
                    <img src={playButton} className="play-button" style={{ visibility: isVisible}} onMouseEnter={() => setVisible("visible")} alt="" srcSet="" />
                    <img className="card-img" src={props.source} />
                    <div className="card-body">
                        <h4 className="song-title">{props.title}</h4>
                        <p className="song-detail">{props.details}</p>
                    </div>
                </div></a>

        </>
    )
}
export default Card;