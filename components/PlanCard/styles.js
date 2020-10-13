import styled from "styled-components";

export const Container = styled.div`
  -webkit-flex: 1 1 0;
  -ms-flex: 1 1 0;
  flex: 1 1 0;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(134, 141, 155, 0.2);
  margin: 0 12px;
  max-width: 536px;
  cursor: default;
  transition: transform 0.25s ease-in;
  color: #5e6573;
  min-width: 500px;
  z-index: 0;

  &:hover {
    .plan-card-border {
      width: 100%;
    }

    .button-wrapper {
      button {
        background-color: #c40233;
        color: white;
        border: 2px solid #c40233;
      }
    }
  }

  @media (min-width: 1000px) and (max-width: 1800px) {
    min-width: 340px;
    max-width: 340px;
  }

  @media (min-width: 792px) and (max-width: 999px) {
    min-width: 350px;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 300px;
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }

  font-family: "Lato";

  .plan-card-wrapper {
    position: relative;
    height: 100%;
    padding: 40px 0 0px;

    .plan-card-body {
      background: #f9f9f9;
      border-top: 1px solid #c1c1c1;
      padding: 32px 30px;
      text-align: center;

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
    }
  }

  .plan-card-header {
    padding: 0 20px;
    text-align: center;

    h3 {
      font-size: 1.4em;
      font-weight: bold;
    }

    p {
      font-size: 1.4em;
      font-weight: 100;
    }

    .plan-description {
      min-height: 33px;
    }

    #plan-price {
      font-size: 48px;
      font-weight: 400;
      margin-right: 10px;

      @media (min-width: 770px) and (max-width: 999px) {
        font-size: 34px;
      }

      @media (max-width: 450px) {
        font-size: 30px;
      }

      @media (max-width: 300px) {
        display: block;
        font-size: 1.2em;
      }
    }

    #plan-month {
      font-size: 1.5em;
      font-weight: 100;
    }
  }

  .button-wrapper {
    text-align: center;
    margin: 15px auto 30px;
    width: 100%;
    max-width: 450px;
    button {
      transition: all 0.25s ease-in;
      /* transition: box-shadow 0.25s ease-in; */
      cursor: pointer;
      width: 100%;
      max-width: 450px;
      text-transform: uppercase;
      white-space: nowrap;
      cursor: pointer;
      border: 2px solid #aeb4bf;
      background: transparent;
      height: 65px;
      padding: 0 32px;
      font-size: 16px;
      font-weight: 600;
      line-height: 14px;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      white-space: normal;
      word-wrap: break-word;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .plan-card-border {
    height: 3px;
    width: 0%;
    background: linear-gradient(
      90deg,
      #c40233 0%,
      #f65b5b 56.73%,
      #f78585 100%
    );
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
  }
`;