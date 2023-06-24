import { useState } from "react";
import "../App.css";
function Hamburger(){
    // setting a state for whether button is clicked or not
    const [isclick,setClick]=useState("false");
    // setting a state for whether menu is hidden or not
    const [ishidden,setHidden]=useState("hidden");
    // setting a state to manage the view of button
    const [button,setButton]=useState("fa-solid fa-bars");
    // once the button is clicked following function is executed
    function handleClick(){
        if(isclick==="false"){
            // reverse the class of icon in button
            setButton("fa-solid fa-xmark");
            // reverses the visibility of menu
            setHidden("visible");
            // keep track of whether button is clicked or not
            setClick("true");
        }
        else{
            
            setButton("fa-solid fa-bars");
            setHidden("hidden");
            setClick("false");
        }
    }
    return(
        <>
            <button className="ham-button" onClick={handleClick}><i className={button}></i></button>
            <div className="menu_bar" style={{visibility:ishidden}}>
                    <ul className="hide_menu">
                        <li><i className="fa-solid favicon fa-magnifying-glass"></i>&nbsp;Search</li>
                        <li><i className="fa-solid favicon fa-book-bookmark"></i>&nbsp;&nbsp;Your Library</li>
                        <li><i className="fa-solid favicon fa-house"></i> Home</li>
                        <li><i className="fa-solid favicon fa-square-plus"></i> &nbsp;Create Playlist</li>
                        <li><i className="fa-solid heart fa-heart"></i> &nbsp;Liked Songs</li>
                    </ul>
            </div>
        </>
    )
}

export default Hamburger;
