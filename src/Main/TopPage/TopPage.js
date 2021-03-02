import React from 'react'
import FashionArticleItem from '../Articles/FashionArticleItem'
import fashions from '../Articles/fashions';
import StarsArticleItem from '../Articles/StarsArticleItem'
import starsblock from '../Articles/starsblock';
import TopArticleItem from '../Articles/TopArticleItem'
import tops from '../Articles/tops'

const TopPage = () => {
    return (
        <>
            <h1>...TOP...</h1>
            <div className="toppage">
                {fashions.filter(item => item.category==='top').map(({ id, text, image }) => (
                    <div className="block-f-1" key={id}>
                        <FashionArticleItem text={text} image={image} />
                    </div>
                ))} 
                {tops.filter(item => item.category==='top').map(({ id, image, title, className }) => (            
                    <div className={className} key={id}>
                        <TopArticleItem image={image} title={title} />
                    </div>            
                ))}
            </div>
        </>
    )
}

export default TopPage