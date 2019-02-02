import React from "react";
import NotFoundStyle from "./not-found.style";

export default class NotFound extends React.Component {
  render() {
    return (
      <NotFoundStyle className="xs-12">
        <div className="c-w">
          <div className="c t-c">
            <h1>404</h1>
            <p> Page Not Found</p>
          </div>
        </div>
      </NotFoundStyle>
    );
  }
}
