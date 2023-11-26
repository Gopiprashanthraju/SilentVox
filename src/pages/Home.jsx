import Frame from "../components/Frame";
import { VideoDeck } from "../components/VideoDeck";
import { useState, useEffect } from "react"; // Import useEffect
import axios from "axios";

function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/video/allmeta")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      <VideoDeck title="Recommended" {...data} />
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
