import Frame from "../components/Frame";
import {VideoDeck} from "../components/VideoDeck";
function Page() {
  return <>
    <VideoDeck />
  </>;
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
