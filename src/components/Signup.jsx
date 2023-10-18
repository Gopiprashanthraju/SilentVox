import { Component } from "react";
import validator from "validator";
import { Dice6Fill } from "react-bootstrap-icons";
import {
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      validate: {
        usernameState: "",
        emailState: "",
        passwordState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };
  validateUsername(e) {
    const { validate } = this.state;
    if (
      validator.isAlphanumeric(e.target.value) &&
      !validator.isEmpty(e.target.value)
    )
      validate.usernameState = "success";
    else validate.usernameState = "danger";
    this.setState({ validate });
  }
  validateEmail(e) {
    const { validate } = this.state;
    if (validator.isEmail(e.target.value) && !validator.isEmpty(e.target.value))
      validate.emailState = "success";
    else validate.emailState = "danger";
    this.setState({ validate });
  }
  validatePassword(e) {
    const { validate } = this.state;
    if (
      validator.isStrongPassword(e.target.value) &&
      !validator.isEmpty(e.target.value)
    )
      validate.passwordState = "success";
    else validate.passwordState = "danger";
    this.setState({ validate });
  }
  submitForm(e) {
    e.preventDefault();
    console.log(`User Name: ${this.state.username}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);
  }

  render() {
    const { email, username, password } = this.state;

    return (
      <Form
        className="form px-4 py-4 text-center fs-4"
        onSubmit={(e) => this.submitForm(e)}
      >
        <h2 className="fs-1 fw-bold">Sign Up</h2>
        <FormGroup className="text-start">
          <Label>User Name</Label>
          <Input
            type="text"
            name="username"
            id="username"
            className="mb-2 fs-4"
            placeholder="randomuser123"
            valid={this.state.validate.usernameState === "success"}
            invalid={this.state.validate.usernameState === "danger"}
            value={username}
            onChange={(e) => {
              this.validateUsername(e);
              this.handleChange(e);
            }}
          />
          <FormFeedback>
            Uh oh! Looks like this username is taken. Pick a new one.
          </FormFeedback>
          <FormFeedback valid>
            That&apos;s a valid username. Go ahead.
          </FormFeedback>
        </FormGroup>
        <Button color="primary fs-4" block>
          <Dice6Fill className="bs-primary d-inline-block align-middle"></Dice6Fill>
          <p
            className="d-inline-block align-middle"
            style={{ marginLeft: "0.5em", marginBottom: "0" }}
          >
            Random User Name
          </p>
        </Button>
        <FormGroup className="text-start">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            className="mb-2 fs-4"
            placeholder="example@example.com"
            valid={this.state.validate.emailState === "success"}
            invalid={this.state.validate.emailState === "danger"}
            value={email}
            onChange={(e) => {
              this.validateEmail(e);
              this.handleChange(e);
            }}
          />
          <FormFeedback>
            Uh oh! Looks like there is an issue with your email. Please enter a
            valid email.
          </FormFeedback>
          <FormFeedback valid>
            That&apos;s a valid email. Go ahead.
          </FormFeedback>
        </FormGroup>
        <FormGroup className="text-start">
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            className="mb-2 fs-4"
            placeholder="********"
            value={password}
            onChange={(e) => {
              this.validatePassword(e);
              this.handleChange(e);
            }}
          />
        </FormGroup>
        <Button color="primary" size="lg" className="fs-4" block>
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default Signup;
