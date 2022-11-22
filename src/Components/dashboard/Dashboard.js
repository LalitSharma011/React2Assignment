import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import Header from '../header/Header';


export default function Dashboard() {
    const [news,setNews] = useState([])
    const[later,setLater] =useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=7173bb0ecf214c62a37cb63362f13c0e")
        .then((response)=>{
            return response.json() 
        })
        .then((data)=>{
            console.log(data.articles);
            setNews(data.articles)
           
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    
    const readLater = (newCard) => {

        fetch('http://localhost:3001/newsdata',{
            'method' : 'POST',
            'body' : JSON.stringify(newCard),
            'headers' : {'Content-Type' : 'application/json'}
        })
        .then((response)=> {
            return response.json()
        })
        .then((data)=>{
            setLater([...later, data])
        })
        .catch((error)=>{
            console.log(error);
        })
      };

  return (
    <>
    {/* <Header/> */}

    <div data-testid="dashboardId" id="dataStore" name="dataStoreName" className="container">
    <div className="row">
        {
        news.map((item) => <div className="col-12 col-md-8 col-lg-4"> <Card urlToImage={item.urlToImage} title={item.title} author={item.author} readLater={readLater} description={item.description} url={item.url}/></div>)
        }
    </div>
    </div>
    </>
    )
}