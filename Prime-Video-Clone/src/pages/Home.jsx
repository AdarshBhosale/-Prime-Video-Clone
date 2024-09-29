// eslint-disable-next-line no-unused-vars
import React from "react";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Section
        heading={"Welcome to Prime Video"}
        desc={
          <>
            Join Prime to watch the latest movies, TV shows and <br />
            award-winning Amazon Originals
          </>
        }
        btn={"Sign in to join prime"}
        img="../../public/images/MLP.jpg"
      />
      {/* D:\Adarsh_Code\IT Shaala Java Full Stack Course\src\Project\Prime-Video-Clone\Prime-Video-Clone\public\images\TVOD_MLP_Right.jpg */}
      <Section
        heading={"Movie rentals on Prime Video"}
        desc={"Early Access to new movies, before digital subscription"}
        btn={"Rent now"}
        img="../../public/images/TVOD_MLP_Right.jpg"
      />
    </div>
  );
};

export default Home;
