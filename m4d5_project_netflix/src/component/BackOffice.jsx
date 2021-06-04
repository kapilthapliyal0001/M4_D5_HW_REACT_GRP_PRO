import {Component} from "react";
import {Form, Button, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GetCom from "./GetCom";

class BackOffice extends Component {
  state = {
    fetch: false,
    reservation: {
      comment: "",
      rate: 0,
      elementId: this.props.id, // we need to change this to a dynamic value obtainer as a attribute;
    },
  };

  inputChange = (e) => {
    let id = e.target.id;

    this.setState({
      reservation: {
        ...this.state.reservation,
        [id]: e.target.value,
      },
    });
  };

  //   Submit section starts
  submitReservation = (e) => {
    e.preventDefault();
    console.log("I'm about to send my reservation!");
    console.log(this.state.reservation);

    try {
      let response = fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.reservation),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmODNiYmJlOWIxNTAwMTU1MDZlMTgiLCJpYXQiOjE2MjI3MzIxOTEsImV4cCI6MTYyMzk0MTc5MX0.ZqdgZmULZcI7gjh5daMg5RB8e4ZXiaeO8cFi1Ztz-Ro",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log("The data has been successfully posted!");
        });
    } catch (error) {
      console.log("There is some error in the fetch!");
    }
  };

  render() {
    return (
      <div className="justify-content-center">
        {/* <Form onSubmit={(e) => this.submitReservation(e)}> */}
        <h3>Welcome to the book </h3>
        <div>
          <GetCom className="justify-content-center" id={this.props.id} />
        </div>

        <div className="justify-content-center">
          {/* Section for posting the comments  IS WORKING */}
          <Form onSubmit={(e) => this.submitReservation(e)}>
            <Form.Group className="d-flex" controlId="formBasicEmail">
              <Form.Label style={{color: "green"}} className="p-1">
                Comment
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Add comments here"
                id="comment"
                value={this.state.reservation.comments}
                onChange={(e) => this.inputChange(e)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="d-flex" controlId="formBasicEmail">
              <Form.Label style={{color: "blue"}} className="p-1">
                Rating
              </Form.Label>
              <Form.Control
                as="select"
                id="rate"
                value={this.state.reservation.rate}
                onChange={(e) => this.inputChange(e)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button
              className="d-flex justify-content-center"
              variant="primary"
              type="submit"
              size="sm"
              onClick={(e) =>
                this.setState({
                  fetch: true, // ready to fetch if submit button is clicked!
                })
              }
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default BackOffice;
