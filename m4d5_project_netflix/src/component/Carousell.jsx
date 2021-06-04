import { Component } from "react";
// import { Carousel, Container, Row, Col } from "react-bootstrap";
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="media-row">
              <div className="row">

                {
                  movies.Search.slice(0,6).map(e => 
                <div className="col-sm-12 m-sm-0 p-sm-2 col-md-2">
                  <img className="coverimage" src="./assets/media/3-1.jpg" />
                </div>
                  )}
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </>  
        )}}
  
export default Carousell