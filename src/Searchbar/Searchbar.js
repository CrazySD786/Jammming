import React from "react";

function Searchbar() {
    return (
        <>
            <input name="songName" type="text" placeholder="Enter song name" />
            <input type="submit" onClick={search} />
        </>
    )
}


export default Searchbar;