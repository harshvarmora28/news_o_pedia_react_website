import React from 'react'


const NewsItem = (props) => {
    
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.imageUrl?props.imageUrl:"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/iog8o7aw3dwnhfje_1630205389.jpeg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text">{props.description}...</p>
                    <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
        </div>
    )
}

export default NewsItem
