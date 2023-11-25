import ReactPlayer from "react-player";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  HourglassSplit,
  ArrowUpSquare,
  ArrowUpSquareFill,
  ArrowDownSquare,
  ArrowDownSquareFill,
} from "react-bootstrap-icons";
function Vote({ upVotes, downVotes,buttonStyle }) {
  let initialUpVotes = upVotes;
  let initialDownVotes = downVotes;
  let [upVote, setUpVote] = useState(upVotes);
  let [downVote, setDownVote] = useState(downVotes);
  return (
    <>
      <div className="d-flex flex-row align-items-center gap-4">
        <div className={buttonStyle || "d-flex flex-row align-items-center justify-content-center fs-2"}>
          {upVote === initialUpVotes ? (
            <ArrowUpSquare
              onClick={() => {
                if (upVote === initialUpVotes && downVote === initialDownVotes)
                  setUpVote(upVote + 1);
                else if (
                  upVote > initialUpVotes &&
                  downVote === initialDownVotes
                )
                  setUpVote(upVote - 1);
              }}
            />
          ) : (
            <ArrowUpSquareFill
              onClick={() => {
                if (upVote === initialUpVotes && downVote === initialDownVotes)
                  setUpVote(upVote + 1);
                else if (
                  upVote > initialUpVotes &&
                  downVote === initialDownVotes
                )
                  setUpVote(upVote - 1);
              }}
            />
          )}
          <h4 className="mx-2 my-0">{upVote}</h4>
        </div>
        <div className={buttonStyle || "d-flex flex-row align-items-center fs-2"}>
          {downVote === initialDownVotes ? (
            <ArrowDownSquare
              onClick={() => {
                if (upVote === initialUpVotes && downVote === initialDownVotes)
                  setDownVote(downVote - 1);
                else if (
                  upVote === initialUpVotes &&
                  downVote < initialDownVotes
                )
                  setDownVote(downVote + 1);
              }}
            />
          ) : (
            <ArrowDownSquareFill
              onClick={() => {
                if (upVote === initialUpVotes && downVote === initialDownVotes)
                  setDownVote(downVote - 1);
                else if (
                  upVote === initialUpVotes &&
                  downVote < initialDownVotes
                )
                  setDownVote(downVote + 1);
              }}
            />
          )}
          <h4 className="mx-2 my-0">{downVote}</h4>
        </div>
      </div>
    </>
  );
}
Vote.propTypes = {
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired,
  buttonStyle:PropTypes.string,
};
Vote.defaultProps = {
  upVotes: 0,
  downVotes: 0,
  buttonStyle:"d-flex flex-row align-items-center justify-content-center p-4 rounded-4 bg-dark text-white fs-4"
};
function Options({ views, upvotes, downvotes }) {
  const [watchLater,setWatchLater] = useState(0);
  const bStyle =
    "d-flex flex-row align-items-center p-3 rounded-4 bg-dark text-white btn btn-lg fs-4";
  return (
    <div className="fs-2 d-flex align-items-center text-white p-4  justify-content-between">
      <h5 className="fs-3 mx-1">Views: {views}</h5>
      <div className="d-flex align-items-center gap-4">
        <button className={bStyle} onClick={() => {
          setWatchLater(!watchLater)
        }}>
          <HourglassSplit className="mx-2 my-0"/>
          <h5 className="fs-4 mx-1">{watchLater?"Added to Watch Later":"Watch Later"}</h5>
        </button>
        <Vote upVotes={upvotes} downVotes={downvotes} />
      </div>
    </div>
  );
}

Options.propTypes = {
  views: PropTypes.number.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
};
Options.defaultProps = {
  views: 0,
  upvotes: 0,
  downvotes: 0,
};
const VideoPlayer = ({ title, video }) => {
  document.title = title;
  return (
    <>
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
      <Options />
    </>
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
      <ClampedText lines={showMore ? 100 : 3} fontSize={4} text={description} />
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
