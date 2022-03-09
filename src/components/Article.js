import React from 'react'

export default function Article({title, preview, date}) {
  return <>
   <article>
      <h3>{title}</h3> 
      <small>{date}</small>
      <p>{preview}</p>
   </article>
   
  </>
}
