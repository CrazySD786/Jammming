import React, { useState} from 'react';
import Track from '../Track/Track'

function Playlist({playlist, onRemove, savePlaylist}) {
    return (
        <>
            <form method="post" onSubmit={savePlaylist}>
                <input name="playlistName" type="text" placeholder="Enter playlist name" />
                <button type="submit">SAVE TO SPOTIFY</button>
            </form>
            <ul>
                {playlist.map((obj,index) => <li><Track image={obj.image} name={obj.name} artist={obj.artist} album={obj.album} key={obj.id} id={obj.id} index={index} addButton={false} onRemove={onRemove}/></li>)}
            </ul>
        </>
    )
}

export default Playlist;