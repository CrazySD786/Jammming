import React, { useState} from 'react';
import Track from '../Track/Track';

function Tracklist({tracklist, onAdd}) {
    return (
        <>  

            <ul>
                {tracklist.map((obj,index) => <li><Track image={obj.image} name={obj.name} artist={obj.artist} album={obj.album} key={obj.id} id={obj.id} addButton={true} onAdd={onAdd} index={index}/></li>)}
            </ul>
        </>
    )
}

export default Tracklist;