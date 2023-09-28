import NavigationBar from "./components/Navbar";

// theme switcher
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
)
  import("./dark.scss");
else import("./light.scss");

function App() {
  return (
    <>
      <NavigationBar color="primary" light expand="md" />
    </>
  );
}
export default App;
