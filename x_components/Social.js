import React from 'react'
import SocialItem from './SocialItem'

function Social() {
    return(
        <ul className="list-group">

        <SocialItem
        p = {{
            media: 'Twitter' ,
            id:'Twitter',
            img:'https://picsum.photos/60',
        }}
         />
        <SocialItem 
        p = {{
            media: 'Youtube' ,
            id:'Youtube',
            img:'https://picsum.photos/61',
        }}
        />
        <SocialItem
         p = {{
            media: 'Facebook' ,
            id:'Facebook',
            img:'https://picsum.photos/62',
        }}
         />

        <SocialItem
        p = {{
            media: 'Instagram' ,
            id:'Instagram',
            img:'https://picsum.photos/63',
        }}
         />
        </ul>
    );
}

export default Social;