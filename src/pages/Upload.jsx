import Frame from "../components/Frame";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import axios from "axios";
import { store } from "../main";
import React, { useContext, useState, useEffect } from "react";
function Page() {
  const [token, setToken] = useContext(store);
  const [data1, setData] = useState(null);
  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/Profile", {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [token]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append("title", event.target.title.value);
    data.append("description", event.target.description.value);
    data.append(
      "tags",
      event.target.tags.value.split(",").map((tag) => tag.trim())
    );
    data.append("videoSource", event.target.videoSource.value);
    data.append("thumbnail", event.target.thumbnail.files[0]);
    console.log(data1);
    console.log(data1.email);
    data.append("data1", data1._id);

    if (data.get("videoSource") === "local") {
      data.append("video", event.target.video.files[0]);
    } else {
      data.append("video", event.target.video.value);
    }

    axios
      .post("http://localhost:5000/video/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })

      .catch((error) => {
        console.log(error);
        alert("Error uploading video:", error);
        <Navigate to="/Profile" />;
      });
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
        <Form
          className="text-start fs-2"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
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
