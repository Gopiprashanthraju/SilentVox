import Frame from "../components/Frame";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useState } from "react";

function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    data.title = event.target.title.value;
    data.description = event.target.description.value;
    data.tags = event.target.tags.value.split(",").map((tag) => tag.trim());
    data.videoSource = event.target.videoSource.value;
    data.thumbnail = event.target.thumbnail.files[0];
    if (data.videoSource === "local") {
      data.video = event.target.video.files[0];
    } else {
      data.video = event.target.video.value;
    }
    console.log(data);
    //   TODO: Upload data to server
  };
  const [videoType, setVideoType] = useState("local");
  return (
    <>
      <Container
        className=" text-white fs-1 p-5 rounded-3 text-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1>Upload</h1>
        <Form className="text-start fs-2" onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input type="text" name="title" className="fs-3" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              rows="8"
              className="fs-4"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tags">Tags</Label>
            <Input
              type="text"
              name="tags"
              className="fs-4"
              placeholder="Enter comma seperated list of tags"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Input
              type="file"
              name="thumbnail"
              bsSize="lg"
              accept="image/*"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="videoType">Video Source</Label>
            <Input
              type="select"
              bsSize="lg"
              name="videoSource"
              onChange={(e) => {
                setVideoType(e.target.value);
              }}
              required
            >
              <option value="local">Local</option>
              <option value="youtube">YouTube</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            {videoType === "youtube" ? (
              <Input
                type="text"
                name="video"
                bsSize="lg"
                placeholder="Enter Youtube Video URL (https://www.youtube.com/watch?v=u6gSSpfsoOQ)"
                required
              />
            ) : (
              <Input
                type="file"
                name="video"
                bsSize="lg"
                accept="video/mp4"
                required
              />
            )}
          </FormGroup>
          <Button className="btn-lg w-100" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
function Upload() {
  return (
    <Frame>
      <Page />
    </Frame>
  );
}
export default Upload;
