import React from "react";
import MainArea from "~/components/MainArea/MainArea";
import Sidebar from "~/components/SideBar/Sidebar";
import FlexContainer from "~/containers/FlexContainer";

const Home = () => {
  return (
    <div className="h-screen">
      <FlexContainer>
        <Sidebar />
        <MainArea />
      </FlexContainer>
    </div>
  );
};

export default Home;
