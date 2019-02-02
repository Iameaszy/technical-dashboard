import styled from "styled-components";
const green = "#009093";

export default styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  overflow: auto;
  #close-modal {
    position: absolute;
    right: 0;
    height: 50px;
    width: 50px;
    font-size: 1em;
    font-weight: 900;
    background: white;
    border: 2px solid ${green};
    border-radius: 50px;
    margin: 1em;
    color: ${green};
    box-shadow: 0px 0px 4px 0px #272727;
    font-family: AvantGarde !important;

    &:hover {
      background: ${green};
      color: white;
    }
  }
`;
