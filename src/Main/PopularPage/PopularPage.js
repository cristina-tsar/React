import React from 'react'
import tops, {getTopsObject} from '../Articles/tops'

export const PopularPage = ({
    match,
    topsObject= getTopsObject(tops)
}) => {
   console.log(match)
   const id = match.params.id;
    return (
        <>
            <h1>{topsObject[id].title}</h1>
        </>
    )
}

