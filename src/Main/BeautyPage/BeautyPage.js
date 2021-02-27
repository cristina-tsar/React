import React from 'react'
import FashionArticleItem from '../Articles/FashionArticleItem'
import fashions from '../Articles/fashions';
import StarsArticleItem from '../Articles/FashionArticleItem'
import starsblock from '../Articles/starsblock';



const BeautyPage = () => {
    return (
        <>
            <h1>...BEAUTY...</h1>
            <div className="beautypage">
                {fashions.filter(item => item.category==="beauty").map(({ id, text, image }) => (
                    <div className="block-f-1" key={id}>
                        <FashionArticleItem text={text} image={image} />
                    </div>
                ))}           
                {starsblock.filter(item => item.category==="beauty").map(({ id, name, information, image, btnlearn }) => (
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

export default BeautyPage