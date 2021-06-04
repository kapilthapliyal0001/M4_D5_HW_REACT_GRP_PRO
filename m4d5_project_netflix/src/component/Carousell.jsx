import { Component } from "react";
import { Container, Row, Card, Image, } from "react-bootstrap";





class Carousell extends Component {

  // http://www.omdbapi.com/?apikey=88e0a7be&s=harry%20potter

  state = {
    moviesArr: []
  }

  componentDidMount = async () => {
 
    console.log('COMPONENTDIDMOUNT')
   
    try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=88e0a7be&s=${this.props.search}`)
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

      <Container>
        <Row>
                {
                  this.state.moviesArr.map(movie => (
                <Card className="px-1">
                  <Image className="coverimage" src={movie.Poster} alt={movie.Title}/>
                  {/* <div className="text-black">{movie.Title}</div> */}
                </Card>
                
                ))} 
                                  
  
        </Row>
        </Container>

   </>  
        )}}
  
export default Carousell