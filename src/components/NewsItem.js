import React from 'react'

const NewsItem = (props) => {
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
                <img src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </div>
    )
}

export default NewsItem
