import { Component } from "react";
import validator from "validator";
import {
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      validate: {
        usernameState: "",
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
    console.log(`Password: ${this.state.password}`);
  }

  render() {
    const { username, password } = this.state;

    return (
      <Form
        className="form px-4 py-4 text-center fs-4"
        onSubmit={(e) => this.submitForm(e)}
      >
        <h2 className="fs-1 fw-bold">Sign In</h2>
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
          <FormFeedback>Invalid User name or Password</FormFeedback>
          <FormFeedback valid></FormFeedback>
        </FormGroup>
        <Button color="primary" size="lg" className="fs-4" block>
          Sign In
        </Button>
      </Form>
    );
  }
}

export default Signin;
