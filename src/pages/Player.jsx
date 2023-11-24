import Frame from "../components/Frame";
import { VideoPlayer, Description } from "../components/VideoPlayer";
import Comments from "../components/Comments";
import { VideoDeck } from "../components/VideoDeck";
import PropTypes from "prop-types";
function Page({ description }) {
  return (
    <>
      <div className="d-flex p-4">
        <div
          style={{
            width: "80%",
          }}
        >
          <VideoPlayer />
          <Description description={description} />
          <Comments />
        </div>
        <VideoDeck title="Suggested" />
      </div>
    </>
  );
}
Page.propTypes = {
  description: PropTypes.string.isRequired,
};
Page.defaultProps = {
  description: `
  lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nisl nisl ultrici
  es, quis aliquet odio diam a nisl. Donec sit amet eros at odio tincidunt luctus. Ut euismod, dolor sit amet aliquam
  faucibus, ex elit ultricies augue, a porta nunc elit sit amet elit. Nulla facilisi. Sed euismod, nisl eget ultricies
  ultrices, nisl nisl ultricies, quis aliquet odio diam a nisl. Donec sit amet eros at odio tincidunt luctus. Ut euismod,
  dolor sit amet aliquam faucibus, ex elit ultricies augue, a porta nunc elit sit amet elit. Nulla facilisi. Sed euismod,
  nisl eget ultricies ultrices, nisl nisl ultricies, quis aliquet odio diam a nisl. Donec sit amet eros at odio tincidunt
  luctus. Ut euismod, dolor sit amet aliquam faucibus, ex elit ultricies augue, a porta nunc elit sit amet elit. Nulla
  facilisi. Sed euismod, nisl eget ultricies ultrices, nisl nisl ultricies, quis aliquet odio diam a nisl. Donec sit amet
  eros at odio tincidunt luctus. Ut euismod, dolor sit amet aliquam faucibus, ex elit ultricies augue, a porta nunc elit
  sit amet elit. Nulla facilisi. Sed euismod, nisl eget ultricies ultrices, nisl nisl ultricies, quis aliquet odio diam a
  nisl. Donec sit amet eros at odio tincidunt luctus. Ut euismod, dolor sit amet aliquam faucibus, ex elit ultricies
  augue, a porta nunc elit sit amet elit. Nulla facilisi. Sed euismod, nisl eget ultricies ultrices, nisl nisl ultricies,
  quis aliquet odio diam a nisl. Donec sit amet eros at odio tincidunt luctus. Ut euismod, dolor sit amet aliquam
  faucibus, ex elit ultricies augue, a porta nunc elit sit amet elit. Nulla facilisi. Sed euismod, nisl eget ultricies
  ultrices, nisl nisl ultricies, quis aliquet odio diam a nisl. Donec sit amet eros at odio tincidunt luctus. Ut euismod,
  `,
};
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
