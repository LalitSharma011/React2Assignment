import React, { useEffect, useState } from 'react'
// import { NavItem } from 'react-bootstrap'

export default function Business() {
  const [news, setNews] = useState([])

  useEffect(() => {

    fetch("https://newsapi.org/v2/top-headlines?category=business&apikey=11d57fbab7c340559e6fb12a9b6e9e94&page=1")
      .then(res => res.json())
      .then(data => {
        console.log(data.atticles)
        setNews(data.articles);
      })

  }, [])


  return (
    <div className="container">
      <div className="row">
        {


          news.map((item) => <div className="card user-card col-12 col-sm-9 col-md-6 col-lg-3">
            <div className="card-body">
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title} {item.author} </h5>
                <a href={item.url} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
