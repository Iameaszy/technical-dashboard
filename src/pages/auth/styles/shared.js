import styled from "styled-components";

export default styled.div`
  #error{
    color coral;
  }

  .forgot-password{
        margin: auto;
        width: 100%;

        img{
          object-fit: contain;
          object-position: center;
        }
    .text{
      margin-bottom:1rem;
      color: #888;
    }
  }

  form {
    background: white;
    padding: 2em;

    @media (min-width: 768px) {
      border-radius: 5px;
    }
    .form-group {
      padding: 0.775em;
      width: 100%;

      .split {
        margin: 5px 0;

        @media (max-width: 767px) {
          width: 100%;
        }
        @media (min-width: 768px) {
          width: 50%;

          &:nth-child(1) {
            width: 48%;
            margin-right: 2%;
          }
        }
      }
      button[type="submit"] {
        background: #009d91;
        color: white;
        font-size: 17px;
        border: none;
        border-radius: 5px;
        padding: 0.9em 4.95em;
        letter-spacing: 0.5px;
        font-family: AvantGarde;

        &:hover,
        &:active,
        &:focus {
          background: #008d91;
        }
      }
    }
    
    .form-control {
      width: 100%;
      padding: 1em 3em;
      font-size: 14px;
      border-radius: 5px;
      border: 1px solid #d3d3d3;
      color: #a8a8a8;

      &.not-valid {
        border-color: pink;
      }
     
     
      // &:active,
      // &:focus {
      //   border-color: #009d91;
      // }

      &::placeholder {
        color: #b8b8b8;
      }
    }
  }

  .little {
    font-size: 12px;
    text-decoration: none;
    color: #777777;
    display: block;
  }

  .big {
    font-size: 18.5px;
    text-decoration: none;
    color: #5f5f5f;
    display: block;
    font-family: AvantGarde;
    &.pad {
      padding: 0.5em 0;
    }
  }

  .sm-btn-container {
    padding: 1.1em;
    .sm-btn {
      background: #ebebeb;
      height: 63px;
      padding: 0;
      text-align: left;
      font-size: 13.5px;
      border: 1px solid #ddd;
      border-radius: 5px;
      color: #777;
      margin: 6px 0;

      span {
        height: 100%;
      }
      .sm-icon {
        height: 35px;
        width: 35px;
        object-fit: contain;
        object-position: center;
        opacity: 0.6;
      }

      &:hover,
      &:active,
      &:focus {
        background: #dbdbdb;
      }
      @media (min-width: 767px) {
        margin-right: 10px;
      }
      &:nth-child(1) {
        float: right;
      }
      &:nth-child(2) {
        float: left;
      }
    }
  }
`;
