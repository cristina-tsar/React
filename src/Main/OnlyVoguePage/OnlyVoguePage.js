import React from 'react'
import fashions, {getFashionsObject} from '../Articles/fashions'

export const OnlyVoguePage = ({
    match,
    fashionsObject= getFashionsObject(fashions)
}) => {
   console.log(match)
   const id = match.params.id;
    return (
        <>
            <h1>{fashionsObject[id].text}</h1>
        </>
    )
}

