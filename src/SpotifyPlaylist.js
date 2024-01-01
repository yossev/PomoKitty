import React from "react";

function SpotifyPlaylist() {
  return( 
    <div className="Spotify" style={{position: 'relative', textAlign:'center', paddingTop: '0px'}}>

<iframe style={{borderRadius: '12px', paddingTop: '0px'}} src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0" width="80%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

    </div>



  );
}

export default SpotifyPlaylist;
