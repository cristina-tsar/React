import React from 'react'
import FashionArticleItem from '../Articles/FashionArticleItem'
import fashions from '../Articles/fashions';
import StarsArticleItem from '../Articles/FashionArticleItem'
import starsblock from '../Articles/starsblock';
import TopArticleItem from '../Articles/FashionArticleItem'
import tops from '../Articles/tops'

const LifeStylePage = () => {
    return (
        <>
            <h1>...LYFE STYLE...</h1>
            <div className="lifestylepage">
                {fashions.filter(item => item.category==="lifestyle").map(({ id, text, image }) => (
                    <div className="block-f-1" key={id}>
                        <FashionArticleItem text={text} image={image} />
                    </div>
                ))} 
                {tops.filter(item => item.category==='lifestyle').map(({ id, image, title, className }) => (            
                    <div className={className} key={id}>
                        <TopArticleItem image={image} title={title} />
                    </div>            
                ))}
                {starsblock.filter(item => item.category==='lifestyle').map(({ id, name, information, image, btnlearn }) => (
                    <div className="star-blocks" key={id}>
                        <StarsArticleItem
                            name={name}
                            information={information}
                            image={image}
                            btnlearn={btnlearn}
                        />
                    </div>
                ))}
            </div>
        </>
        
    )
}

export default LifeStylePage