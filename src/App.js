import './App.css';
import Sidebar from './Components/Side_bar';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Focus from './Components/focus';
import Footer from './Components/Footer';
import playlist from './Components/spotify_playlist';
import Sound from './Components/sound_india';

function App() {

  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div className='cardholder'>
      <h3 className='song-category'>Focus</h3>
      {Focus.map(Card)}
      <h3 className='song-category'>Spotify Playlists</h3>
      {playlist.map(Card)}
      <h3 className='song-category'>Sound of India</h3>
      {Sound.map(Card)}
    </div>
    <Footer/>
    </>
  );
}

export default App;
