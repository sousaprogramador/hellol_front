import styled from "styled-components";

export const PlanFormContainer = styled.div`
  font-family: "Lato", sans-serif;

  .card-ddfa {
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100vh - 102px);
  }

  @keyframes example {
    from {
      height: 100vh;
    }
    to {
      height: 0;
    }
  }

  .shadow-overlay {
    font-family: "Lato", sans-serif;
    width: 100%;
    background: #0000008f;
    height: 100vh;
    position: fixed;
    z-index: 9;
    overflow: hidden;
    z-index: 999999;
  }

  .hidden-shadows {
    display: none;
  }

  .form-plan {
    transition: right 0.6s;
    width: 740px;
    margin-left: auto;
    margin-right: auto;
    display: table;
    height: 100vh;
    background: white;
    border-radius: 10px 0px 0px 0px;
    position: fixed;
    right: -100vw;
    z-index: 9999999;
    box-shadow: -1px -3px 20px 0px #4444440a;
    background: #f9fbfc;
  }

  .form-plan.show {
    right: 0;

    @media (min-width: 375px) and (max-width: 700px) {
      width: 95%;
      right: 2.5%;
      left: 2.5%;
      height: 100vh;
      top: 15px !important;
    }

    @media (max-width: 374px) {
      width: 100%;
      border-radius: 0;
    }
  }

  .form-plan.hidden {
    right: calc(-100vw);
  }

  .form-plan.gamer {
    background-color: #1d1b1b;
    color: #d00336;
    box-shadow: -1px 0px 4px #ffffff47;

    .header {
      background: #c40333;
      .logo {
        background-image: url("/static/svg/toledo-icon-white.svg");
      }
      .bar-title {
        color: white;
      }
    }

    .product-details {
      color: #ff0e4c;

      #product {
        color: #ff104c;
        margin-bottom: 0px;
      }
    }

    form {
      .section-title {
        color: #808080;
        border-bottom: 1px solid #808080;
      }

      input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #d00335;
        border-radius: 0;
      }

      button {
        background-color: #c40333;
      }
    }
  }

  .header {
    min-height: 60px;
    background: #fff;
    border-bottom: 1px solid #f1f3f6;
    box-shadow: 0px 1px 1px #f1f3f6;
    padding: 10px 20px;
    display: flex;

    .logo {
      width: 50px;
      height: 40px;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

    .close-btn {
      position: absolute;
      right: 26px;
      font-size: 2em;
      font-weight: 100;
      cursor: pointer;
      color: #e09999;

      &:hover {
        color: #c40333;
      }
    }

    .bar-title {
      margin-left: 40px;
      color: #5f6268;

      font-size: 0.9em;

      .title {
        display: block;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
  }

  form {
    input {
      text-transform: capitalize;
    }

    @media (max-width: 700px) {
      .form-group {
        float: none;
        width: 100% !important;
        padding-right: 0 !important;
      }
    }

    .form-group {
      float: left;
    }

    #plan-id {
      width: 213px;
    }
    #ddd-code {
      width: 130px;
    }

    #email > input {
      text-transform: initial !important;
    }

    #ddd-code,
    #plan-id {
      padding-right: 20px;
    }

    button {
      padding: 15px 30px;
      border: none;
      background: #47d5a2;
      color: white;
      width: 100%;
      cursor: pointer;
    }

    button.disabled {
      filter: contrast(0.4);
      cursor: not-allowed;
    }

    .section-title {
      font-size: 0.8em;
      color: #6d6d6d;
      border-bottom: 1px solid #e2e2e2;
      text-transform: capitalize;
    }

    .loader,
    .loader:after {
      border-radius: 50%;
      width: 7em;
      height: 7em;
    }
    .loader {
      position: absolute;
      margin: 0 auto;
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: 1.1em solid rgba(255, 255, 255, 0.2);
      border-right: 1.1em solid rgba(255, 255, 255, 0.2);
      border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
      border-left: 1.1em solid #47d5a2;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: load8 1.1s infinite linear;
      animation: load8 1.1s infinite linear;
    }
    @-webkit-keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;

export const FormSection = styled.div.attrs({
  className: "formSection"
})`
  padding: 10px 30px;

  @media (max-width: 320px) {
    padding: 6px 6px;
  }
  .product-details {
    color: #656565;
    p:first-child {
      margin: 0px;
    }

    #product {
      font-size: 1.6em;
      color: #000000;
      font-weight: 700;
      margin-bottom: 0px;
    }

    .sub-details {
      margin: 0;
      padding: 0;
      list-style-type: none;
      margin-bottom: 20px;

      li {
        display: inline;
        margin-left: 10px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;
