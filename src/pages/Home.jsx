import Frame from "../components/Frame";
import { VideoDeck } from "../components/VideoDeck";
function Page() {
  return (
    <>
      <VideoDeck title="Recommended" />
    </>
  );
}
function Home() {
  return (
    <>
      <Frame>
        <Page />
      </Frame>
    </>
  );
}

export default Home;
