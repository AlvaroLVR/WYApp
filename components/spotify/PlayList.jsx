import React from "react";
import { useSpotify } from "../../src/hooks/useSpotify";
import './playlist.css'

export default function PlayList({ playlistId }) {
  const playlist = useSpotify(playlistId);

  if (!playlist) return <p>Cargando playlist...</p>;

  // Mezclar aleatoriamente las canciones
  const shuffledTracks = [...playlist.tracks.items].sort(() => Math.random() - 0.8);
  

  return (
    <div>
      <div className="spotifySong">
        <div className="songImg">
        <img src={shuffledTracks[0].track.album.images[1].url} alt="img" />
        </div>
        <div className="songInfo">
          <ul className="playslistName">{playlist.name}</ul>
          <ul className="songName" >{shuffledTracks[0].track.name}</ul>
          <ul>
            <li>{shuffledTracks[0].track.artists[0].name}</li>
            <li><a  href={shuffledTracks[0].track.external_urls.spotify}>Reproducir</a></li>
          </ul>
        </div>
      </div>
      <p className="description">{playlist.description}</p>
    </div>
  );
}
