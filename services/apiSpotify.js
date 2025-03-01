const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID; 
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_SECRET_CLIENT_ID;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

export async function getPlaylistData(playlistId) {
  const token = await getAccessToken();

  const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}??fields=items(added_by.id,track(name,href,album(name,href)))`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    console.error("Error al obtener la playlist", response.status);
    return null;
  }

  return await response.json();
}
