import Frame from "../components/Frame";
import { VideoPlayer } from "../components/VideoPlayer";
import Comments from "../components/Comments";
import { VideoDeck } from "../components/VideoDeck";
function Page() {
  return (
    <>
      <div className="d-flex p-4">
        <div
          style={{
            width: "80%",
          }}
        >
          <VideoPlayer />
          <Comments />
        </div>
        <VideoDeck title="Suggested" />
      </div>
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
