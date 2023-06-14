import React, { useState} from 'react';
import Track from '../Track/Track';
import './Playlist.css'

function Playlist({playlist, onRemove, savePlaylist}) {
    return (
        <>
            <div className='playlist'>
                <form method="post" onSubmit={savePlaylist}>
                    <input className='white' name="playlistName" type="text" placeholder="Enter playlist name" />
                    <ul>
                        {playlist.map((obj,index) => <li><Track image={obj.image} name={obj.name} artist={obj.artist} album={obj.album} key={obj.id} id={obj.id} index={index} addButton={false} onRemove={onRemove}/></li>)}
                    </ul>
                    <button className='submitButton green' type="submit">SAVE TO SPOTIFY</button>
                </form>
            </div>
        </>
    )
}

export default Playlist;