import React from 'react'
import NewsItem from './NewsItem'

const News = () => {
    return (
        <div className="container my-3">
            <h4>Top Headlines</h4>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title="harsh" description="i am a boy" />
                </div>  
                <div className="col-md-4">
                    <NewsItem title="harsh" description="i am a boy" />
                </div>  
                <div className="col-md-4">
                    <NewsItem title="harsh" description="i am a boy" />
                </div>  
            </div>
        </div>
    )
}

export default News
