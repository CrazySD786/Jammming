import React, { useState} from "react";
import Tracklist from '../Tracklist/Tracklist';

function SearchResult({tracklist, onAdd}) {
    return (
        <>
            <h1>Search Results</h1>
            <Tracklist tracklist={tracklist} onAdd={onAdd}/>
        </>
    )
}

export default SearchResult;