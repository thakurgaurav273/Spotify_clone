import { useState } from 'react';
import '../App.css';


function Sidebar(){
    const [isclicked,setClick]=useState("false");
    const [isVisible,setVisible]=useState("hidden");
    function handleClick(){
            if(isclicked==="false"){
                setClick("true");
                setVisible("visible");
            }
            else{
                setClick("false");
                // setVisible("hidden");
            }
    }

    function close_lang(){
        if(isVisible==="visible"){
            setVisible("hidden");
            setClick("false")
        }
        else{
            setVisible("visible");
            setClick("false");
        }
    }
    return(
        <>
            <div className="container">
                <div className="container-content">
                    <br />
                    <ul>
                        <a href="/"><li><i className="fa-solid favicon fa-magnifying-glass"></i>&nbsp;Search</li></a>
                        <a href="/"><li><i className="fa-solid favicon fa-book-bookmark"></i>&nbsp;&nbsp;Your Library</li></a>
                        <a href="/"><li><i className="fa-solid favicon fa-house"></i> Home</li></a>
                        <a href="/"><li><i className="fa-solid favicon fa-square-plus"></i> &nbsp;Create Playlist</li></a>
                        <a href="/"><li><i className="fa-solid heart fa-heart"></i> &nbsp;Liked Songs</li></a>
                    </ul>

                    <ul className='bottom'>
                        <li className='bitem'> <a href="/">Legal </a> &nbsp; <a href="/"> Privacy Center</a></li>
                        <li className='bitem'> <a href="/">Privacy Policy</a> &nbsp; &nbsp; <a href="/">Cookies</a> </li>
                        <li className='bitem'> <a href="/">About Ads</a> &nbsp; &nbsp; <a href="/">Accessibility</a></li>
                        <li className='bitem'><a href="/">Cookies</a></li>

                    <button className='choose-lang' onClick={handleClick}><i className="fa-solid fa-globe"></i> English</button>
                    
                    </ul>

                </div>
                <div className='select_lang' style={{visibility:isVisible}}>
                    <i onClick={close_lang} className="fa-sharp fa-solid lang_close_button fa-xmark"></i>
                    <div className='lang_available'>
                        <h2>Choose A Language</h2>
                        <span>This updates what you read on open.spotify.com </span>
                        <hr />
                        <ul>
                            <li>English</li>
                            <li>Bhojpuri</li>
                            <li>Bengali</li>
                            <li>Gujarati</li>
                            <li>Catalan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;