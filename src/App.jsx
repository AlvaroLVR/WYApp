import React from 'react';
import WheaterFixed from '../components/wheater/WheaterFixed';
import WheaterDynamic from '../components/wheater/WheaterDynamic';
import Counter from '../components/counter/Counter'
import PlayList from '../components/spotify/PlayList';

const App = () => {
  return (
    <div className='container'>
      <div>
        <WheaterFixed />
        <WheaterDynamic />
      </div>
      <Counter/>
      <PlayList playlistId="5JVofqViV0APUu7q5x28K0" /> {/* se le pasa el codigo de la Playlist https://open.spotify.com/playlist/5JVofqViV0APUu7q5x28K0  */}
    </div>
  );
};

export default App;
