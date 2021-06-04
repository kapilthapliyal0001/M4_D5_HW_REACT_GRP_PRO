import { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";




class Carousell extends Component {

  // http://www.omdbapi.com/?apikey=88e0a7be&s=harry%20potter

  state = {
    moviesArr: []
  }

  componentDidMount = async () => {
 
    console.log('COMPONENTDIDMOUNT')
   
    try {
        let response = await fetch('http://www.omdbapi.com/?apikey=88e0a7be&s=harry%20potter')
        console.log('what is this',response)
        let movies = await response.json()
        let arrray = movies.Search
        console.log('MOVIES',arrray )
        this.setState({
           moviesArr: arrray
        })
    } catch (error) {
        console.log(error)
        
    }
}



  render() {
    return (
      <>

      <div id="tvseries" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="media-row">
              <div class="row">
                {
                  this.state.moviesArr.slice(0,4).map(movie => (
                <div class="col-sm-12 m-sm-0 p-sm-2 col-md-2">
                  <img className="coverimage" src={movie.Poster} alt={movie.Title}/>
                  <div className="text-white">{movie.Title}</div>
                </div>
                
                ))} 
                                  
  
                </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="500">
            <div class="media-row">
              <div class="row">
              {
                  this.state.moviesArr.slice(3,7).map(movie => (
                <div class="col-sm-12 m-sm-0 p-sm-2 col-md-2">
                  <img className="coverimage" src={movie.Poster} alt={movie.Title}/>
                  <div className="text-white">{movie.Title}</div>
                </div>
                
                ))} 
              </div>
            </div>
          </div>
        
          <button id="arrow-left" class="carousel-control-prev" type="button" data-bs-target="#tvseries"
            data-bs-slide="prev">
            <span class="fas fa-chevron-left" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button id="arrow-right" class="carousel-control-next" type="button" data-bs-target="#tvseries"
            data-bs-slide="next">
            <span class="fas fa-chevron-right" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
   </>  
        )}}
  
export default Carousell