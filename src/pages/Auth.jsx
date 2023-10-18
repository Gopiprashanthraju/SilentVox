import Signup from "../components/Signup";
import Signin from "../components/Signin";
import NavigationBar from "./../components/Navbar";

function Auth() {
  return (
    <>
      <NavigationBar color="light" light expand="md" />
      <Signup />
      <Signin />
    </>
  );
}
export default Auth;
