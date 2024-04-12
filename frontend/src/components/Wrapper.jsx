import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

const Wrapper = ({ element }) => {
  return (
    <>
			<Header/>
        {element}
      <Footer/>
    </>
  )
};

export default Wrapper;