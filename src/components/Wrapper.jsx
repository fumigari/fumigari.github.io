import React from "react";
import Header from "./Header/Header";

const Wrapper = ({ element }) => {
  return (
    <>
			<Header/>
      {element}
    </>
  )
};

export default Wrapper;