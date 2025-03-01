import { useState, useEffect } from "react";
import { getPlaylistData } from "../../services/apiSpotify";

export function useSpotify(playlistId) {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPlaylistData(playlistId);
      if (data) {
        setPlaylist(data);
      }
    }

    fetchData();
  }, [playlistId]);

  return playlist;
}
