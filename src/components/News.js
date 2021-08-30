import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {
    let articles = []
    const [article, setArticle] = useState(articles);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=589ccc3f4d9c4617be3bcedea98d1864&page=1&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticle(parsedData.articles);
            setTotalResult(parsedData.totalResults);
            setLoading(false);
            
        }
        fetchData();
      }, [props.pageSize]); // Or [] if effect doesn't need props or state
    
    const handlePrevClick = () => {
        async function fetchData() {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=589ccc3f4d9c4617be3bcedea98d1864&page=${page - 1}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticle(parsedData.articles);
            setPage(page - 1);
            setLoading(false);
          
        }
        fetchData();
        
    }  
    const handleNextClick = () => {
        if(page + 1 > Math.ceil(totalResult/props.pageSize)){
            
        }
        else{
            async function fetchData() {
                let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=589ccc3f4d9c4617be3bcedea98d1864&page=${page + 1}&pageSize=${props.pageSize}`;
                setLoading(true);
                let data = await fetch(url);
                let parsedData = await data.json();
                setArticle(parsedData.articles);
                setPage(page + 1);
                setLoading(false);
            
            }
            fetchData();
            
        }
    }  

    return (
        <div className="container my-3">
            <h4>Top Headlines</h4>
            {loading && <Spinner/>}
            <div className="row">
                {!loading && article.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 94):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })}
            </div>
            <div className="container d-flex justify-content-between my-4">
            <button disabled={page <= 1} type="button" onClick={handlePrevClick}className="btn btn-dark">&larr; Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResult/props.pageSize)} type="button" onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
            </div>
        </div>
    )
}

export default News
