import React from 'react'

export default function About({image, about}) {

    if(image){
        return (
            <aside>
               <img src ={image} alt = "blog logo"></img> 
               <p>{about}</p>
            </aside>
          )

    }
    else {
        return (
            <aside>
               <img src ="https://via.placeholder.com/215 (Links to an external site.)" alt = "blog logo"></img> 
               <p>{about}</p>
            </aside>
          )

    }
  
}
