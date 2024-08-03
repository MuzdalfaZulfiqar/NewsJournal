

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import DataFiles from './DataFiles'
import SpinnerComponent from './SpinnerComponent';
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    category : "general"
  }
  static propTypes = {
    category : PropTypes.string
  }

    constructor(props){
        super(props);

        // define a state like this in case of classes and when to use it it will be 
        // like this.state.artciles
        this.state = {
            articles : DataFiles.articles,
            page : 1,
            totalresults :10,
            loading: false
        }
    };
    

    async updateNews(){
      
      const url = `https://newsdata.io/api/1/latest?category=${this.props.category}&apikey=pub_4987862ba7a3d4b445f46c1804724320d54fd&domainurl=bbc.com`
       let data = await fetch(url);
       let resJSON = await data.json();
       console.log(resJSON)
       this.setState(
        {
          articles : resJSON.results,
          totalresults: 10,
        })
    }


    async componentDidMount(){
      // let url =  `https://newsapi.org/v2/top-headlines&apiKey=68c580e69901452a9fe94f30e3562a43
      // &page=${this.state.page}&pageSize=${4}
      this.updateNews()

    }


  render() {

    // making it within render means limiting its scope so when using within scope
    // arite directly
    const newArr = this.state.articles.map((news)=>{
        return(
                    <NewsItem 
                    title = {news.title} 
                    description = {news.description}
                    urlToImage = {news.image_url}
                    url = {news.source_url}
                /> 
                )
    })


  const handleNextClick =    async  () =>{
    if(this.state.page + 1 > Math.ceil(this.state.totalresults/10)){
      alert("Woho , This is blind end you cannot go any further")
    } 
    else{
      let url = `https://newsdata.io/api/1/latest?category=${this.props.category}&apikey=pub_4987862ba7a3d4b445f46c1804724320d54fd&domainurl=bbc.com&page=${this.state.page+1}&pageSize=${4}`
      // before fecthing the data show the loading spinner
      this.setState({
        loading:true
      })
      let data = await fetch(url);
      let resJSON = await data.json();
      console.log(resJSON)
      
      this.setState(
        {
          articles : resJSON.articles,
          page :this.state.page + 1,
          
       // successfully paesed the data now stop spinner
        loading : false
       }
      )
    }
  

    }
    const handlePrevClick = async ()=>{
      if(this.state.page - 1 <= 0){
        alert("Woho , This is blind end you cannot go back")
      } 
      else{
        this.state.loading = true
        let url =`https://newsdata.io/api/1/latest?category=${this.props.category}&apikey=pub_4987862ba7a3d4b445f46c1804724320d54fd&domainurl=bbc.com&page=${this.state.page-1}&pageSize=${4}`
        this.setState({
          loading:true
        })
        let data = await fetch(url);
        let resJSON = await data.json();
        console.log(resJSON)
        this.setState(
         {
          articles : resJSON.articles,
          page :this.state.page - 1,
          loading : false
        })
      }
    }

    return (
      <div className='container'>
        <h2 className='container-title'>Top Headlines</h2>
        {/* if the spinner is true then show this component otherwise do not do anything */}
        {this.state.loading && <SpinnerComponent/> }
        
        <div className='conainer-news'>
        {newArr}
      
  
    
        </div>  
        <div className="containerButtons">
        <a href="#" class="previous round" 
        // to load the prev section of news
         onClick={handlePrevClick}
        >&#8249;</a>
        <a href="#" class="next round"

        // load next section of news
         onClick={handleNextClick}
        >&#8250;</a>
          </div>  
      </div>
    )
  }
}
