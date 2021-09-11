import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import SpinnerCentered from './SpinnerCentered';

const News = (props) => {
    let articles = []
    const [article, setArticle] = useState(articles);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function fetchData() {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=589ccc3f4d9c4617be3bcedea98d1864&page=1&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticle(parsedData.articles);
            setTotalResult(parsedData.totalResults);
            setLoading(false);
        }
        fetchData();
      }, [props.pageSize, props.country, props.category]); // Or [] if effect doesn't need props or state

    // const handlePrevClick = () => {
    //     async function fetchData() {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=589ccc3f4d9c4617be3bcedea98d1864&page=${page - 1}&pageSize=${props.pageSize}`;
    //         setLoading(true);
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         setArticle(parsedData.articles);
    //         setPage(page - 1);
    //         setLoading(false);
          
    //     }
    //     fetchData();
        
    // }  
    // const handleNextClick = () => {
    //     if(page + 1 > Math.ceil(totalResult/props.pageSize)){
            
    //     }
    //     else{
    //         async function fetchData() {
    //             let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=589ccc3f4d9c4617be3bcedea98d1864&page=${page + 1}&pageSize=${props.pageSize}`;
    //             setLoading(true);
    //             let data = await fetch(url);
    //             let parsedData = await data.json();
    //             setArticle(parsedData.articles);
    //             setPage(page + 1);
    //             setLoading(false);
            
    //         }
    //         fetchData();
            
    //     }
    // }  

    const fetchMoreData = async () => {
            setPage(page + 1);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=589ccc3f4d9c4617be3bcedea98d1864&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticle(article.concat(parsedData.articles));
            setTotalResult(parsedData.totalResults);
            setLoading(false);
        };
        
    return (
        <>
            <h2 className="text-center my-3" id="main-headline">Today's Top-Headlines</h2>
            {loading && <SpinnerCentered/>}
            <InfiniteScroll
            dataLength = {article.length}
            next = {fetchMoreData}
            hasMore = {article.length !== totalResult}
            loader = {<Spinner/>}
            >   
            <div className="container">
                <div className="row">
                    {article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 94):""} author={element.author} date={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div> 
                    })}
                </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired
}

News.defaultProps = {
    country: "in",
    pageSize: 12
}

export default News
