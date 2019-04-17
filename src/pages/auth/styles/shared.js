import styled from 'styled-components';

export default styled.div`
  background: #f1f2f7;
  #error {
    color: coral;
  }

  .logo {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin: auto;
    margin-bottom: 1rem;
  }
  .login-link {
    color: dimgray;
    font-size: 13px;
  }

  .forgot-password {
    margin: auto;
    width: 100%;
    margin-top: 50px;

    .title {
      margin-bottom: 0.5rem !important;
      font-size: 1.5rem;
    }
    img {
      object-fit: contain;
      object-position: center;
    }
    .text {
      margin-bottom: 1rem;
      color: #888;
    }
  }

  form {
    background: white;
    padding: 2em;

    .welcome {
      margin-bottom: 0;
    }
    .notice {
      font-weight: 300;
      font-size: 1.4rem;
      color: #5d5959;
      text-align: center;
    }
    @media (min-width: 768px) {
      border-radius: 5px;
    }

    .form-group-checkbox {
      padding: 0 0.775em;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;

      .remember-label {
        font-size: smaller;
        color: #777777;
      }
      input[type="checkbox"] {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 5px;
        border: 2px solid #8080ef;
        margin-right: 10px;
      }
      input[type="checkbox"]:checked {
        background: #abd;
      }
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
        background: linear-gradient(to right, #a09df8, #328ee6);
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        padding: 0.9em 4.95em;
        letter-spacing: 0.5px;
        font-family: AvantGarde;
        width: 100%;

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

  .g-btn {
    margin-right: 0;
    & > span {
      width: 100%;
    }
  }

  .little {
    font-size: 12px;
    text-decoration: none;
    color: #777777;
    display: block;
    margin-bottom: 0;
  }

  .signup-title {
    text-align: left;
    font-size: 23px;
    color: #655f5f;
  }

  .signup-text {
    display: block;
    text-align: left;
    color: darkgray;
    font-size: 13px;
  }

  .header {
    background: linear-gradient(to left, #ff8e97, #8b34cc);
    padding: 5px 70px;
    .header-logo {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
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

  .social-btn-container {
    padding: 20px;
    margin: 0;
  }
`;
