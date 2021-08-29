import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const News = () => {
    let articles = []
    const [article, setArticle] = useState(articles);

    useEffect(() => {
        async function fetchData() {
            let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=589ccc3f4d9c4617be3bcedea98d1864";
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticle(parsedData.articles);
          
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
    
    return (
        <div className="container my-3">
            <h4>Top Headlines</h4>
            <div className="row">
                {article.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 94):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })}
            </div>
        </div>
    )
}

export default News
