import React, { Component } from "react";
import styled from "styled-components";

const PW = styled.div`
  .container {
    background: white;
    padding: 2em;
    h3 {
      font-size: 1.25em;
      color: gray;
      font-weight: 300;
    }
  }
`;
export default class PleaseLogin extends Component {
  render() {
    return (
      <PW className="xs-12 i">
        <div className="c-w">
          <div className="c t-c">
            <div
              className="container xs-12 sm-6 sm-off-3"
              onClick={e => e.stopPropagation()}
            >
              <h3>
                Oh, You are not logged in.
                <br />
                <br />
                Please login to book.
              </h3>
            </div>
          </div>
        </div>
      </PW>
    );
  }
}
