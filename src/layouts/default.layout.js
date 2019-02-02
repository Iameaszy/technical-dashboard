import React from 'react';
import { Route } from "react-router-dom";
import Navbar from "../shared-components/navbar";
import Footer from "../shared-components/footer";


import ModalLayout from './modal.layout';
// import SearchBar from "../shared-components/search-bar";

const DefaultLayout = ({ component: Component, ...rest }) => {
  window.scroll(0, 0);
  const { canSearch } = rest;
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <ModalLayout />
          <Navbar canSearch={canSearch} />
          <Component {...matchProps} />
          <Footer />
        </div>
      )}
    />
  );
};
export default DefaultLayout;
