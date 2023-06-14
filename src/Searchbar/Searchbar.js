import React from "react";
import './Searchbar.css'


function Searchbar({onSubmit}) {
    return (
        <>
            <div className="searchbar">
                <form method="post" onSubmit={onSubmit}>
                    <input className='white' name="songName" type="text" placeholder=" Enter song name" />
                    <input type="submit" className="green"/>
                </form>
            </div>
        </>
    )
}


export default Searchbar;