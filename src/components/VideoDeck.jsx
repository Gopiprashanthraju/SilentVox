import { VideoCard, VideoCardMini } from "./VideoCard";
import PropTypes from "prop-types";

export function VideoDeck({ title, videos }) {
  return (
    <>
      <div className="p-3">
        <h1 className="fs-1 text-white ">{title}</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gridGap: "1rem",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {videos.map((video) => (
            <div key={video.uri}>
              <VideoCardMini
                title={video.title}
                thumbnail={video.thumbnail}
                creator={video.creator}
                uri={video.uri}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
VideoDeck.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      creator: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
    })
  ).isRequired,
};
VideoDeck.defaultProps = {
  title: "Video Deck",
  videos: Array(8).fill({
    title: "Dark Visions: The Elusive Video and the Galaxy's Shrouded Secrets",
    thumbnail: "https://specializeddental.com/assets/placeholder-image.png",
    creator: "DarkLordStrategy",
    uri: "video-uri",
  }),
};
export function VideoList({ videos }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(300px, 1fr)",
          gridGap: "0.1rem",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {videos.map((video) => (
          <div key={video.uri}>
            <VideoCard
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              creator={video.creator}
              uri={video.uri}
              views={video.views}
              timestamp={video.timestamp}
            />
          </div>
        ))}
      </div>
    </>
  );
}
VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      creator: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};
VideoList.defaultProps = {
  videos: Array(4).fill({
    title: "Dark Visions: The Elusive Video and the Galaxy's Shrouded Secrets",
    description:
      "In the depths of the galaxy, a situation emerged where the very location of a crucial video remained shrouded in darkness. The video, a key to unraveling a complex plot, was believed to hold the answers I sought. However, as I scoured the vast expanse of the cosmos and consulted my extensive resources, I came to a grim realization.The video's location was invalid, obscured by layers of deception and misdirection. It seemed to defy even the most potent Sith abilities. No matter how deeply I delved into the Force, the trail led only to dead ends and false leads. The elusive recording was concealed within a labyrinthine network of misdirection and secrecy, a puzzle that eluded my relentless pursuit.In this predicament, I was confronted with the bitter truth that the video's hidden location might forever remain beyond my grasp, a testament to the cunning of those who had gone to great lengths to keep its secrets obscured.",
    thumbnail: "https://specializeddental.com/assets/placeholder-image.png",
    creator: "DarkLordStrategy",
    uri: "video-uri",
    views: 0,
    timestamp: "2021-05-01T00:00:00Z",
  }),
};
