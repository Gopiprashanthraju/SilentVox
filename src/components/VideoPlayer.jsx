import ReactPlayer from "react-player";
import { useState } from "react";
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
function ClampedText({ text, lines, fontSize }) {
  return (
    <p
      className={`fs-${fontSize} text-wrap`}
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
      }}
    >
      {text}
    </p>
  );
}
ClampedText.propTypes = {
  text: PropTypes.string.isRequired,
  lines: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
};
function Description({ description }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container-fluid rounded-4 overflow-hidden text-white bg-black p-3">
      <h2 className="text-white text-center ">Description</h2>
      <ClampedText lines={showMore ? 100 : 3} fontSize={5} text={description} />
      <button
        className="btn btn-lg btn-link text-white fw-bolder fs-4 text-decoration-none w-100"
        onClick={() => setShowMore(!showMore)}
        style={{}}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
Description.propTypes = {
  description: PropTypes.string.isRequired,
};
export { VideoPlayer, Description };
