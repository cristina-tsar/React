import React from 'react'
import menuitem from '../MenuFooter/menuitem'

const MenuFooter = () => {
    return (
        <div class="footer-text">
           {menuitem.map(({id,text}) => (
               <div key={id}>
                <a href="">{text}</a>
            </div>
           ))} 
        </div>
    )
}

export default MenuFooter