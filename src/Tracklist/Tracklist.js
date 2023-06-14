import React from 'react';
import Track from '../Track/Track';

function Tracklist() {
    return (
        <>
            <ul>
                {Track.map()}
            </ul>
        </>
    )
}