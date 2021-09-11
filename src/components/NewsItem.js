import React from 'react'


const NewsItem = (props) => {
    
    return (
        <div>
            <div className="card my-2" id="news-card">
                <img src={props.imageUrl?props.imageUrl:"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/iog8o7aw3dwnhfje_1630205389.jpeg"} className="card-img-top" id="news-img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}...<span className="position-absolute text-dark top-0 translate-middle badge rounded-pill bg-warning" style={{fontSize: "10px", left: "91%", boxShadow: "0px 1px 2px black", zIndex: "1"}}>{props.source}
                        <span className="visually-hidden">unread messages</span>
                        </span></h5>
                    <p className="card-text" id="news-desc">{props.description}...</p>
                    <p className="card-text"><small id="muted-text">By {props.author?props.author:"Unknown"} on {new Date(props.date).toUTCString()} </small></p>
                    <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm" id="read-more-btn">Read More</a>
                </div>
                </div>
        </div>
    )
}

export default NewsItem
