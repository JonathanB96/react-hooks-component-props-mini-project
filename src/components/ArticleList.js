import React from 'react'
import blogData from '../data/blog';
import Article from './Article';

export default function ArticleList() {

   
    const articles = blogData.posts.map((el) =>{
      
      if(el.date){
       return <Article key={el.id}  title ={el.title} preview = {el.preview} date = {el.date} />  
      }
      else{
        return <Article key={el.id}  title ={el.title} preview = {el.preview} date = "January 1, 1970" />  

      }
      
     
    })
    return <>
  <main>
    {articles}
  </main>
 
 </>

  

 
}
