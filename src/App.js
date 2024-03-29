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
import Todo from './Todo';
import TimeWidget from './TimeWiget';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [WorkTime, setWorkTime] = useState(45);
  const [BreakTime, setBreakTime] = useState(15);
  const [showAbout, setShowAbout] = useState(false);

  const openAboutWindow = () => {
    setShowAbout(true);
  };

  const closeAboutWindow = () => {
    setShowAbout(false);
  };

  return (
    <>
      <main>
        <div className="header">
          <button className="about-button" onClick={openAboutWindow}>
            About
          </button>
          {showAbout && <AboutWindow onClose={closeAboutWindow} />}
          <TimeWidget />
        </div>
        <div className='bottom-left-panel'>
          <NewsPanel />
        </div>
        <div className='bottom-right-panel'>
          <Todo />
        </div>
        <SettingsContext.Provider
          value={{
            workMinutes: WorkTime,
            breakMinutes: BreakTime,
            setWorkTime,
            setBreakTime,
            showSettings,
            setShowSettings,
          }}
        >
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
        <img
          src={cat}
          alt="Kitty Gif"
          style={{
            width: '50px',
            height: 'auto',
            objectFit: 'cover',
            paddingBottom: '0px',
            marginBottom: '0px',
          }}
        />
        <SpotifyPlaylist />
      </main>
      <Footer />
    </>
  );
}

export default App;
