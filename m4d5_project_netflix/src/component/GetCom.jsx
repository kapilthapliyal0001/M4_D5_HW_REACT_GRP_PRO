import {Component} from "react";
import {ListGroup, Row, Container, Col, Button} from "react-bootstrap";
// import Edit from "./Edit";
// import Del from "./Del";
// import Wait from "./Wait";

//   Class component to show all the comments and having the option of Editing and DELETING them;
class GetCom extends Component {
  // State starts

  state = {
    // data: [{}, {}],
    // data: null,
    selected: false,
  };

  deleteComment = async (e) => {
    console.log("need to delete the comment ");
    console.log(e);

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${e}`, // need to change this comment to a dynamic value
        {
          method: "DELETE",
          body: JSON.stringify(this.state.reservation),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmODNiYmJlOWIxNTAwMTU1MDZlMTgiLCJpYXQiOjE2MjI3MzIxOTEsImV4cCI6MTYyMzk0MTc5MX0.ZqdgZmULZcI7gjh5daMg5RB8e4ZXiaeO8cFi1Ztz-Ro",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          console.log("The data has been successfully posted!");
        });
      console.log(response, "This is the response");
    } catch (error) {
      console.log("Sorry");
      console.log(error);
    }
  };

  getcomment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, // need to change this comment to a dynamic value
        {
          method: "GET",
          //   body: JSON.stringify(this.state.reservation),
          headers: {
            // "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmODNiYmJlOWIxNTAwMTU1MDZlMTgiLCJpYXQiOjE2MjI3MzIxOTEsImV4cCI6MTYyMzk0MTc5MX0.ZqdgZmULZcI7gjh5daMg5RB8e4ZXiaeO8cFi1Ztz-Ro",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          console.log("The data has been successfully posted!");
          this.setState({data: result});
          console.log("Below is the data from the set state");
          console.log(this.state.data);
        });
    } catch (error) {
      console.log("There is some error in the fetch!");
    }
  };

  render() {
    return (
      // A wrapper for the whole comment section;
      <Container>
        <div
          className="m-5"
          onClick={(e) => {
            this.getcomment();
            console.log("on clicked below is the state property");
            console.log(this.state.data);
            this.setState({selected: true});
          }}
        >
          <Button variant="info">Click to load</Button>{" "}
        </div>

        <Row>
          <Col xs={12} md={6}>
            <ListGroup>
              {this.state.data &&
                this.state.data.map((movie) => (
                  <ListGroup.Item key={movie._id} className="d-flex">
                    {movie.comment}
                    <Button
                      variant="outline-warning"
                      className="ml-3"
                      onClick={(e) => {
                        this.editComment(movie._id);
                      }}
                    >
                      EDIT
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      className="ml-3"
                      onClick={(e) => {
                        this.deleteComment(movie._id);
                      }}
                    >
                      Delete
                    </Button>{" "}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GetCom;
