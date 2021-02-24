import React from 'react'
import socicon from '../SocialIcon/socicon'

const SocialIcon = () => {
    return (
        <div class="soc-media footer-soc">
            {socicon.map(({id, image}) =>(
                <div class="icon-share" key={id}>
                    <a href="">
                        <img src={image} alt="" srcset="" />
                    </a>
                </div>
            ))}            
        </div>

    )
}

export default SocialIcon