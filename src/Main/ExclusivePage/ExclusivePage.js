import React from 'react'

import TopArticleItem from '../Articles/FashionArticleItem'
import tops from '../Articles/tops'

const ExclusivePage = () => {
    return (
        <>
            <h1>...EXCLUSIVE...</h1>
            <div class="exclusivepage">
                {tops.filter(item => item.category==='exclusive').map(({ id, image, title, className }) => (            
                <div className={className} key={id}>
                    <TopArticleItem image={image} title={title} />
                </div>            
                ))}
            </div> 
        </>
    )
}

export default ExclusivePage