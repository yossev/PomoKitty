
import './App.css';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';
import { useState } from 'react';
import Footer from './Footer';
import SpotifyPlaylist from './SpotifyPlaylist';
import cat from './KittyGif.gif';
import AboutWindow from './AboutWindow';
import NewsPanel from './NewsPanel';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [WorkTime, setWorkTime] = useState(45);
  const [BreakTime, setBreakTime] = useState(15);
  const [showAbout, setShowAbout] = useState(false);

  const openAboutWindow = () => {
    setShowAbout(true);
  }
  const closeAboutWindow = () => { 
    setShowAbout(false);
  }

  return (
    <>
    <main>
      <div className="header">
          <button className="about-button"onClick={openAboutWindow}>
            About
          </button>
          {showAbout && <AboutWindow onClose={closeAboutWindow} />}
      </div>
      <div className='bottom-left-panel'>

        <NewsPanel />

      </div>
      <div className='bottom-right-panel'>
        <todo />
      </div>
      <SettingsContext.Provider value={{
        workMinutes: WorkTime,
        breakMinutes: BreakTime,
        setWorkTime,
        setBreakTime,
        showSettings,
        setShowSettings,
      }}>
      {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    <img
  src={cat}
  alt="Kitty Gif"
  style={{
    width: '50px', 
    height: 'auto', 
    objectFit: 'cover',
    paddingButtom: '0px',
    marginButtom: '0px',
  }}
/>

      <SpotifyPlaylist />
      </main>
    <Footer />
    </>
  );
}

export default App;

// For Now i will only have one page