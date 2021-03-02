import React from 'react'
import starblocks, {getStarblocksObject} from '../Articles/starblocks'

export const StarsPage = ({
    match,
    starblocksObject = getStarblocksObject(starblocks)
}) => {
    console.log(match)
    const id = match.params.id;
    return (
        <>
            <h1>{starblocksObject[id].name}</h1>
        </>
    )
}

