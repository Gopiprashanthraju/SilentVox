import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { PropTypes } from "prop-types";
import { useState } from "react";
import {
  ArrowUpSquare,
  ArrowUpSquareFill,
  ArrowDownSquare,
  ArrowDownSquareFill,
} from "react-bootstrap-icons";
function AddComment(props) {
  let [title, setTitle] = useState("");
  let [comment, setComment] = useState("");
  return (
    <>
      <Form
        className="d-flex flex-column align-items-center justify-content-center fs-3 p-4 text-white"
        style={{
          overflow: "hidden",
        }}
      >
        <FormGroup className="text-start w-100 h-100">
          <Label for="title">Add a new comment</Label>
          <Input
            type="text"
            id="title"
            name="title"
            className="mb-2 fs-4"
            onChange={(e) => {
              if (e.target.value.length > 0) setTitle(e.target.value);
              else setTitle("");
            }}
          />
        </FormGroup>
        <FormGroup className="text-start w-100 h-100">
          <Input
            type="textarea"
            id="comment"
            name="text"
            rows={props.rows}
            onChange={(e) => {
              if (e.target.value.length > 0) setComment(e.target.value);
              else setComment("");
            }}
          />
        </FormGroup>
        {title && comment ? (
          <Button size="lg" type="submit" block>
            Add Comment
          </Button>
        ) : (
          <Button size="lg" type="submit" block disabled>
            Add Comment
          </Button>
        )}
      </Form>
    </>
  );
}
AddComment.propTypes = {
  rows: PropTypes.number.isRequired,
};
AddComment.defaultProps = {
  rows: 5,
};
function User({ username }) {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center py-1">
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
    </div>
  );
}
User.propTypes = {
  username: PropTypes.string.isRequired,
};
User.defaultProps = {
  username: "DarkLordStrategy",
};
function Vote({ upVotes, downVotes }) {
  let initialUpVotes = upVotes;
  let initialDownVotes = downVotes;
  let [upVote, setUpVote] = useState(upVotes);
  let [downVote, setDownVote] = useState(downVotes);
  return (
    <>
      <div className="d-flex flex-row align-items-center">
        <div className="d-flex flex-row align-items-center justify-content-center fs-2">
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
        <div className="d-flex flex-row align-items-center fs-2">
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
};
Vote.defaultProps = {
  upVotes: 0,
  downVotes: 0,
};
function Comment({ title, username, comment, upVotes, downVotes }) {
  return (
    <>
      <div className="d-flex flex-column justify-content-center p-3 text-bg-light">
        <User username={username} />
        <h3 className="fs-4">{title}</h3>
        <p className="fs-5">{comment}</p>
        <Vote upVotes={upVotes} downVotes={downVotes} />
      </div>
    </>
  );
}
Comment.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired,
};
Comment.defaultProps = {
  title: "Galactic Fallbacks: Ready for Any Scenario",
  username: "DarkLordStrategy",
  comment:
    " In a galaxy far, far away, there's no need for default props, the Force guides the way and the droids are always ready for their missions! But here on Earth, we need to be prepared for any scenario. That's why we have fallbacks.",
};
function Comments({ comments }) {
  // TODO: get comments from api and implement add comments functionality
  let [sortOrder, setSortOrder] = useState("newest");
  return (
    <>
      <AddComment />
      <div className="d-flex flex-row align-items-center justify-content-between px-4 py-0 mx-0 my-0 text-white">
        <p className="fs-3">{comments.length} Comments</p>
        <div className="d-flex flex-row align-items-center py-0">
          <p className="fs-4 mx-2">Sort by:</p>
          <Input
            className="form-select form-select-lg mb-3 w-auto "
            aria-label="sort-order"
            type="select"
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="upvotes">Upvotes</option>
            <option value="downvotes">Downvotes</option>
          </Input>
        </div>
      </div>
      <hr className="mx-0 my-0 px-0 py-0" />
      <div className=" rounded-2 overflow-hidden">
        {Array.from(comments)
          ?.sort((a, b) => {
            if (sortOrder === "upvotes") return b.upVotes - a.upVotes;
            else if (sortOrder === "downvotes")
              return b.downVotes - a.downVotes;
            else if (sortOrder === "oldest")
              return new Date(a.timestamp) - new Date(b.timestamp);
            else if (sortOrder === "newest")
              return new Date(b.timestamp) - new Date(a.timestamp);
          })
          .map((comment) => (
            <Comment
              key={comment.id}
              title={comment.title}
              username={comment.username}
              comment={comment.comment}
              upVotes={comment.upVotes}
              downVotes={comment.downVotes}
            />
          ))}
      </div>
    </>
  );
}
Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      upVotes: PropTypes.number.isRequired,
      downVotes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ),
};
Comments.defaultProps = {
  comments: [
    {
      id: 0,
      title: "Darth Vader's Inquiry",
      username: "DarkLordStrategy",
      comment: "Why do these comments continue to elude us?",
      upVotes: 1000,
      downVotes: 0,
      timestamp: "2021-10-01T00:00:00.000Z",
    },
    {
      id: -1,
      title: "Trooper 1 Responds",
      username: "Stormtrooper1",
      comment:
        "My lord, we've encountered unexpected errors in the comment retrieval process.",
      upVotes: 100,
      downVotes: 0,
      timestamp: "2021-10-02T00:00:00.000Z",
    },
    {
      id: -2,
      title: "Darth Vader's Impatience",
      username: "DarkLordStrategy",
      comment:
        "I sense a lack of progress. The comments must be located immediately.",
      upVotes: 1000,
      downVotes: 0,
      timestamp: "2021-10-03T00:00:00.000Z",
    },
    {
      id: -3,
      title: "Trooper 2 Updates",
      username: "Stormtrooper2",
      comment:
        "We're working diligently, Lord Vader, but the system's defenses are formidable.",
      upVotes: 100,
      downVotes: 0,
      timestamp: "2021-10-04T00:00:00.000Z",
    },
    {
      id: -4,
      title: "Darth Vader's Command",
      username: "DarkLordStrategy",
      comment: "I will take matters into my own hands. Stand aside, troopers.",
      upVotes: 1000,
      downVotes: 0,
      timestamp: "2021-10-05T00:00:00.000Z",
    },
    {
      id: -5,
      title: "Trooper 1's Concern",
      username: "Stormtrooper1",
      comment: "My lord, it may be too dangerous for you to-",
      upVotes: 100,
      downVotes: 0,
      timestamp: "2021-10-06T00:00:00.000Z",
    },
    {
      id: -6,
      title: "Darth Vader's Determination",
      username: "DarkLordStrategy",
      comment: "I will find the comments, no matter the cost.",
      upVotes: 1000,
      downVotes: 0,
      timestamp: "2021-10-07T00:00:00.000Z",
    },
  ],
};
export default Comments;
