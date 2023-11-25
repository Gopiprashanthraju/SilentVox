import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import ReactTimeAgo from "react-time-ago";

function User({ username, mini }) {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center py-1">
      {mini ? (
        <h4 className="fs-5">@{username}</h4>
      ) : (
        <>
          <img
            src={encodeURI(
              "https://ui-avatars.com/api/?background=random&&name=" +
                username.split(/(?=[A-Z])/).join("+")
            )}
            className="rounded border border-2 border-dark"
            width="25"
            height="25"
            alt={username + "'s avatar"}
          />
          <h4 className="fs-5 mx-2">@{username}</h4>
        </>
      )}
    </div>
  );
}
User.propTypes = {
  username: PropTypes.string.isRequired,
  mini: PropTypes.bool,
};
User.defaultProps = {
  username: "DarkLordStrategy",
  mini: false,
};
function ClampedTitle({ text, lines, fontSize }) {
  return (
    <h1
      className={`fs-${fontSize} fw-bolder text-wrap`}
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
      }}
    >
      {text}
    </h1>
  );
}
ClampedTitle.propTypes = {
  text: PropTypes.string.isRequired,
  lines: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
};
function ClampedText({ text, lines, fontSize }) {
  return (
    <p
      className={`fs-${fontSize} fw-bolder text-wrap`}
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
function Meta({ views, timestamp }) {
  return (
    <div className="flex-row align-items-center py-1">
      <h4 className="fs-5 d-inline">{views} views</h4>
      <div className="mx-1 d-inline">&#9679;</div>
      <ReactTimeAgo className="fs-5 d-inline" date={timestamp} locale="en-US" />
    </div>
  );
}
Meta.propTypes = {
  views: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};
function Thumbnail({ src, alt }) {
  return (
    <img
      alt={alt}
      src={src}
      className="rounded-4 border border-2 border-dark w-100"
      style={{
        aspectRatio: "16/9",
        borderRadius: "10px",
      }}
    />
  );
}
Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export function VideoCard({
  title,
  description,
  thumbnail,
  creator,
  uri,
  views,
  timestamp,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="my-2 border border-2 border-white rounded-4 container-fluid p-3 text-white"
      style={{ maxWidth: "1000px" }}
      onClick={() => {
        navigate("/v/" + uri);
      }}
    >
      <Row>
        <Col xs="auto" md={6}>
          <Thumbnail alt={title} src={thumbnail} />
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <div className="p-3">
            <ClampedTitle text={title} lines={2} fontSize={3} />
            <User username={creator} />
            <Meta views={views} timestamp={timestamp} />
            <ClampedText text={description} lines={4} fontSize={5} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};
VideoCard.defaultProps = {
  title: "Dark Visions: The Elusive Video and the Galaxy's Shrouded Secrets",
  description:
    "In the depths of the galaxy, a situation emerged where the very location of a crucial video remained shrouded in darkness. The video, a key to unraveling a complex plot, was believed to hold the answers I sought. However, as I scoured the vast expanse of the cosmos and consulted my extensive resources, I came to a grim realization.The video's location was invalid, obscured by layers of deception and misdirection. It seemed to defy even the most potent Sith abilities. No matter how deeply I delved into the Force, the trail led only to dead ends and false leads. The elusive recording was concealed within a labyrinthine network of misdirection and secrecy, a puzzle that eluded my relentless pursuit.In this predicament, I was confronted with the bitter truth that the video's hidden location might forever remain beyond my grasp, a testament to the cunning of those who had gone to great lengths to keep its secrets obscured.",
  thumbnail: "https://specializeddental.com/assets/placeholder-image.png",
  creator: "DarkLordStrategy",
  uri: "video-uri",
  views: 0,
  timestamp: "2021-05-01T00:00:00Z",
};

export function VideoCardMini({ title, thumbnail, creator, uri }) {
  const navigate = useNavigate();
  return (
    <div
      className="my-2 border border-2 border-white rounded-4 container-fluid p-3 text-white"
      style={{ maxWidth: "350px" }}
      onClick={() => {
        navigate("/v/" + uri);
      }}
    >
      <Row className="d-flex flex-column justify-content-between">
        <Col className="d-flex justify-content-center">
          <Thumbnail alt={title} src={thumbnail} />
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <div className="pt-3">
            <User username={creator} mini />
            <div style={{ height: "60px" }}>
              <ClampedText text={title} lines={2} fontSize={4} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
VideoCardMini.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};
VideoCardMini.defaultProps = {
  title: "Dark Visions: The Elusive Video and the Galaxy's Shrouded Secrets",
  thumbnail: "https://specializeddental.com/assets/placeholder-image.png",
  creator: "DarkLordStrategy",
  uri: "video-uri",
};
