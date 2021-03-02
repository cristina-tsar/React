import React from 'react'
import FashionArticleItem from '../Articles/FashionArticleItem'
import fashions from '../Articles/fashions';
import TopArticleItem from '../Articles/TopArticleItem'
import tops from '../Articles/tops';



const BeautyPage = () => {
    return (
        <>
            <h1>...BEAUTY...</h1>
            <div className="beautypage">
            <>
                {fashions.filter(item => item.category==="beauty").map(({ id, text, image }) => (
                    <div className="block-f-1" key={id}>
                        <FashionArticleItem text={text} image={image} />
                    </div>
                ))} 
                </>
                <>                        
                {tops.filter(item => item.category==='beauty').map(({ id, image, title, className }) => (            
                    <div className={className} key={id}>
                        <TopArticleItem image={image} title={title} />
                    </div>            
                ))}
                </> 
            </div>       
        </>
    )
}

export default BeautyPage