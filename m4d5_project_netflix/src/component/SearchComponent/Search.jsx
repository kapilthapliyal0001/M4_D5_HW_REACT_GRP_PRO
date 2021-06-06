// import "./Search.css";
import {
  Container,
  Row,
  Spinner,
  Alert,
  Form,
  Card,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Component } from "react";
import Button from "react-bootstrap/Button";

const API = "http://www.omdbapi.com/";
const APIKEY = "88e0a7be";
let searchQuery = "";

class Search extends Component {
  state = {
    movies: {},
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    try {
      this.setState({
        isLoading: true,
      });

      let response = await fetch(`${API}?apikey=${APIKEY}&s=${searchQuery}`);
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: data, isError: false, isLoading: false });
      } else {
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  selectedStyle = { border: "2px solid red", color: "red" };
  notSelectedStyle = { border: "none", color: "black" };

  onChangeFunction = (e) => {
    searchQuery = e.target.value;
    this.componentDidMount();
  };

  render() {
    return (
      <>
        <Container>
          <Form>
            <InputGroup className="mt-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="text"
                placeholder="Search"
                onChange={(e) => this.onChangeFunction(e)}
              />

              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>

            {/* <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => this.onChangeFunction(e)}
              />
            </Form.Group> */}
          </Form>
        </Container>
        {this.state.isLoading && (
          <Spinner animation="border" variant="danger" />
        )}
        {!this.state.isLoading && this.state.isError && (
          <Alert variant="danger">Aww snap! We got an error!</Alert>
        )}
        {this.state.movies.Search && (
          <Container fluid>
            <h3 className="mt-4 ">Movies of "{searchQuery}"</h3>
            <Row className="m-5">
              {console.log(
                "this.state.movies.Search:",
                this.state.movies.Search
              )}
              {this.state.movies.Search.length > 0 ? (
                this.state.movies.Search.map((movie) => (
                  <Card key={movie.imdbID} className="px-1">
                    <div>
                      <Image src={movie.Poster} alt={movie.Title} />
                      {/* <div className="text-white">{movie.Title}</div> */}
                    </div>
                  </Card>
                ))
              ) : (
                <p>We don't have Movies yet!</p>
              )}
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default Search;
