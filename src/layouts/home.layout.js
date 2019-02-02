import React from 'react';
import Footer from '../shared-components/footer';
import { Route } from 'react-router-dom';
import Navbar from '../shared-components/navbar';
import { withRouter } from 'react-router-dom';
import ModalLayout from './modal.layout';

const HomeLayout = ({ component: Component, location, ...rest }) => {
  window.scroll(0, 0);
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="HomeLayout">
          <ModalLayout />
          <Navbar type="transparent" />
          <Component {...matchProps} />
          <Footer />
        </div>
      )}
    />
  );
};
export default withRouter(HomeLayout);
