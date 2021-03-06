import React from 'react'
import fashions, {getFashionsObject} from '../Articles/fashions'

export const OnlyVoguePage = ({
    match,
    fashionsObject= getFashionsObject(fashions),   
}) => {
   const id = match.params.id;
    return (
        <>
            <h1>{fashionsObject[id].text}</h1>
            <p dangerouslySetInnerHTML={{__html:fashionsObject[id].fullDescription}}></p>
        </>
    )
}

