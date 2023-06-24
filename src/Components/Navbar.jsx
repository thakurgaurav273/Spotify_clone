import "../App.css";
import logo from "../Spotify_Logo_CMYK_White.png" ;
import Hamburger from "./hamburger";
function Navbar(){
    return( 
        <>
            <div className="navbar">
                <a href="/"><img src={logo} className='brand-logo' alt="" srcSet="" /></a>
                
                <div className="left-item">
                <i className="fa-solid navigator fa-chevron-left"></i>
                <i className="fa-solid navigator fa-chevron-right"></i>
                </div>

                <div className="right-item">
                    <a href="/" className="signup">Sign Up</a>
                    <button className="login">Log in</button>
                    <Hamburger/>
                </div>
            </div>
        </>
    )
}
export default Navbar;