import React from "react";
import Lottie from "lottie-react";
import loadingAnim from "../Assets/loading.json"; // adjust path if needed

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <Lottie
        animationData={loadingAnim}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}

export default Pre;
