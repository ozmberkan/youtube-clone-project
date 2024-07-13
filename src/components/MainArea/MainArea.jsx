import React from "react";
import Categories from "../Categories/Categories";
import VideoBoxArea from "./VideoBoxArea.jsx/VideoBoxArea";

const MainArea = () => {
  return (
    <div className="w-full">
      <Categories />
      <VideoBoxArea />
    </div>
  );
};

export default MainArea;
