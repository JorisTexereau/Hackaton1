import React, { useState } from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import Area from './Area';

function SearchPage() {
    const [areaSize, setAreaSize] = useState(false)
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>It's time to act !</h1>
                <h2>What's happening nearby</h2>
                <Button variant="outlined" onClick={()=>{setAreaSize(!areaSize)}}>Area flexibility</Button>
                <Button variant="outlined">Type of event</Button>
                <Button variant="outlined">Reward</Button>
                <Button variant="outlined">More filters</Button>
                {areaSize && <Area />}
            </div>
        </div>
    )
}

export default SearchPage;