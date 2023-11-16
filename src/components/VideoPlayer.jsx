import ReactPlayer from "react-player";
import PropTypes from "prop-types";
const VideoPlayer = ({ title, video }) => {
  document.title = title;
  return (
    <div
      className="container"
      style={{
        borderRadius: "15px",
        aspectRatio: "16/9",
      }}
    >
      <ReactPlayer
        className="react-player"
        url={video}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};
VideoPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  video: PropTypes.any.isRequired,
};
export default VideoPlayer;
