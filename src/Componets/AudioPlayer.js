import { render } from "@testing-library/react";

const playlistId = '65sfeaFxGD1VjAylPq5vMC';

const AudioPlayer=()=>{
    render()
    return(
        <div>
            <h2 align="center">BollyWood Song's</h2>
<iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/65sfeaFxGD1VjAylPq5vMC?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"

/>
</div>
    )
}
export default AudioPlayer;